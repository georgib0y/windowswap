import Gtk from "@girs/gtk-4.0";
import Adw from "@girs/adw-1";
import Gio from "@girs/gio-2.0";
import {
    ExtensionPreferences,
    gettext as _,
} from "@girs/gnome-shell/dist/extensions/prefs";

export default class GnomeRectanglePreferences extends ExtensionPreferences {
    _settings?: Gio.Settings;
}
