package com.getcapacitor;

import com.outsystems.experts.capacitortoastplugin.ToastPlugin;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.annotation.Config;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(RobolectricTestRunner.class)
@Config(sdk = 28)
public class ToastPluginTest {

    private ToastPlugin toastPlugin;
    private PluginCall pluginCall;

    @Before
    public void setUp() {
        toastPlugin = new ToastPlugin();
        pluginCall = mock(PluginCall.class);
    }

    @Test
    public void testShowMessage_WithValidValue() {
        when(pluginCall.getString("value")).thenReturn("Hello World");

        toastPlugin.showMessage(pluginCall);

        ArgumentCaptor<JSObject> argumentCaptor = ArgumentCaptor.forClass(JSObject.class);
        verify(pluginCall).resolve(argumentCaptor.capture());

        JSObject capturedObject = argumentCaptor.getValue();

        assertEquals("Hello World", capturedObject.getString("value"));
    }

    @Test
    public void testShowMessage_WithEmptyValue() {
        when(pluginCall.getString("value")).thenReturn("");

        toastPlugin.showMessage(pluginCall);

        ArgumentCaptor<JSObject> argumentCaptor = ArgumentCaptor.forClass(JSObject.class);
        verify(pluginCall).resolve(argumentCaptor.capture());

        JSObject capturedObject = argumentCaptor.getValue();

        assertEquals("The value cannot be empty!", capturedObject.getString("message"));
    }
}