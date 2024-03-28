package com.bkonboarding

import android.Manifest
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.gms.location.LocationServices

class LocationModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = "LocationModule"

    private val LOCATION_PERMISSION_REQUEST_CODE = 1
    private lateinit var promise: Promise
    private val fusedLocationClient = LocationServices.getFusedLocationProviderClient(reactContext)
    private val reactContext: ReactContext = reactApplicationContext

    @ReactMethod
    fun getCurrentLocation(promise: Promise) {
        this.promise = promise

        if (hasLocationPermission()) {
            fetchLocation()
        } else {
            requestLocationPermission()
        }
    }

    private fun hasLocationPermission(): Boolean {
        return ActivityCompat.checkSelfPermission(
            reactContext,
            Manifest.permission.ACCESS_COARSE_LOCATION
        ) == PackageManager.PERMISSION_GRANTED
    }

    private fun requestLocationPermission() {
        ActivityCompat.requestPermissions(
            currentActivity!!,
            arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION),
            LOCATION_PERMISSION_REQUEST_CODE
        )
    }


    private fun fetchLocation() {
        try {
            fusedLocationClient.lastLocation
                .addOnSuccessListener { location ->
                    if (location != null) {
                        val locationMap = Arguments.createMap()
                        locationMap.putDouble("latitude", location.latitude)
                        locationMap.putDouble("longitude", location.longitude)
                        promise.resolve(locationMap)
                    } else {
                        promise.reject("Location Error", "Failed to get location")
                    }
                }
                .addOnFailureListener { exception ->
                    promise.reject(exception)
                }
        } catch (e: SecurityException) {
            promise.reject("Location Error", "SecurityException: ${e.message}")
        }
    }

}