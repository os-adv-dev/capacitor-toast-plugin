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
    public void echo(PluginCall call) {
        String value = call.getString("value");

        Toast.makeText(this.getContext(), value, Toast.LENGTH_SHORT).show();

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }
}
