package com.walletly.Locale

import android.os.Build
import android.content.res.Resources
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

import java.util.Locale

class LocaleModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "LocaleModule"
    }

    private fun getLanguage(): String {
        val config = Resources.getSystem().configuration
        val locale = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            config.locales.get(0)
        } else {
            @Suppress("DEPRECATION")
            config.locale
        }
        
        return "${locale.language}_${locale.country}"   
    }

    @ReactMethod
    fun getDeviceLanguage(promise: Promise) {
        try {
            val language = getLanguage()
            val map = WritableNativeMap()
            map.putString("language", language)
            promise.resolve(map)
        } catch (e: Exception) {
            promise.reject("LANGUAGE_ERROR", e)
        }
    }
}
