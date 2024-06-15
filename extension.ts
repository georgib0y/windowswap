import GLib from "@girs/glib-2.0";
import Gio from "@girs/gio-2.0";
import Meta from "@girs/meta-14";
import Shell from "@girs/shell-14";
import * as Main from "@girs/gnome-shell/src/ui/main";
import { Extension } from "@girs/gnome-shell/src/extensions/extension";

export default class WindowSwap extends Extension {
    gsettings?: Gio.Settings;
    animationsEnabled: boolean = true;

    enable() {
        this.gsettings = this.getSettings();
        this.animationsEnabled =
            this.gsettings!.get_value("padding-inner").deepUnpack() ?? 8;
    }

    disable() {
        this.gsettings = undefined;
    }
}
