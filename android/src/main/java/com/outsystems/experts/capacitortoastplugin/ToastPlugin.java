package com.outsystems.experts.capacitortoastplugin;

import android.widget.Toast;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Toast")
public class ToastPlugin extends Plugin {

    @PluginMethod
    public void showMessage(PluginCall call) {
        String value = call.getString("value");

        if(value.isEmpty()) {
            JSObject error = new JSObject();
            error.put("message", "The value cannot be empty!");
            call.resolve(error);
            return;
        }

        Toast.makeText(this.getContext(), value, Toast.LENGTH_SHORT).show();

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }
}
