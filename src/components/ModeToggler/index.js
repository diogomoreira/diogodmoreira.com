import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun"
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon"

import {
  ModeTogglerContainer,
  TogglerInput,
  ToggleSlot,
  LightThemeIcon,
  DarkThemeIcon,
  ToggleButton,
} from "./styled"

export default function ModeToggler() {
  return (
    <ModeTogglerContainer>
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          if (theme == null) {
            return null
          }
          return (
            <label htmlFor="toggler">
              <TogglerInput
                id="toggler"
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              ></TogglerInput>
              <ToggleSlot>
                <LightThemeIcon icon={faSun} />
                <ToggleButton />
                <DarkThemeIcon icon={faMoon} />
              </ToggleSlot>
            </label>
          )
        }}
      </ThemeToggler>
    </ModeTogglerContainer>
  )
}
