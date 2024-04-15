import {Routes, Route, NavLink} from "react-router-dom";
import {SettingsContent} from "@/components/Settings/SettingsContent.jsx";

export function SettingsPage() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav
          className="grid gap-4 text-sm text-muted-foreground"
        >
          <NavLink
            to="/settings/general"
            className={({ isActive }) =>
              isActive ? "font-semibold text-primary" : "text-muted-foreground"
            }
          >
            General
          </NavLink>
          <NavLink
            to="/settings/security"
            className={({ isActive }) =>
              isActive ? "font-semibold text-primary" : "text-muted-foreground"
            }
          >
            Security
          </NavLink>
          <NavLink
            to="/settings/shortcuts"
            className={({ isActive }) =>
              isActive ? "font-semibold text-primary" : "text-muted-foreground"
            }
          >
            Keyboard Shortcuts
          </NavLink>
        </nav>
        <Routes>
          <Route path=":section" element={<SettingsContent />} />
          <Route index element={<SettingsContent />} />
        </Routes>
      </div>
    </main>
  );
}
