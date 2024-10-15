package com.outsystems.experts.capacitortoastplugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Toast")
public class ToastPlugin extends Plugin {

    private final JSObject result = new JSObject();

    @PluginMethod
    public void showMessage(PluginCall call) {
        String value = call.getString("value");

        if(value.isEmpty()) {
            result.put("message", "The value cannot be empty!");
            call.resolve(result);
            return;
        }

        result.put("value", value);
        call.resolve(result);
    }
}
