/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
// Below path will be there when an application installs `@carbon/web-components` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import Fade16 from '@carbon/web-components/es/icons/fade/16';
import Search20 from '@carbon/web-components/es/icons/search/20';
import Notification20 from '@carbon/web-components/es/icons/notification/20';
import SwitcherIcon20 from '@carbon/web-components/es/icons/switcher/20';
import contentStyles from '@carbon/styles/scss/components/ui-shell/content/_content.scss';
import { SIDE_NAV_COLLAPSE_MODE, SIDE_NAV_USAGE_MODE } from './side-nav';
import { classMap } from 'lit/directives/class-map.js';
import './side-nav-items';
import './side-nav-link';
import './side-nav-divider';
import './side-nav-menu';
import './side-nav-menu-item';
import './header';
import './header-nav';
import './header-nav-item';
import './header-menu';
import './header-menu-item';
import './header-menu-button';
import './header-name';
import './header-global-action';
import './header-panel';
import './header-side-nav-items';
import './switcher';
import './switcher-item';
import './switcher-divider';
import '../skip-to-content';
import '../modal/modal';
import '../button/button';
import styles from './ui-shell-story.scss';
import storyDocs from './ui-shell-story.mdx';
import { prefix } from '../../globals/settings';

const linksHref = 'https://www.carbondesignsystem.com/';

const StoryContent = ({ useResponsiveOffset = true }) => {
  const firstColumnClasses = classMap({
    [`${prefix}--col-lg-13`]: true,
    [`${prefix}--offset-lg-3`]: useResponsiveOffset,
  });
  const toggleButton = () => {
    document.querySelector('cds-modal')?.toggleAttribute('open');
  };
  return html`
    <style type="text/css">
      ${contentStyles.cssText}
    </style>
    <main class="${prefix}--content ${prefix}-ce-demo-devenv--ui-shell-content">
      <div class="${prefix}--grid">
        <div class="${prefix}--row">
          <div
            class="${firstColumnClasses}"
            style="${!useResponsiveOffset ? `margin-left: 16rem;` : ''}">
            <h2 style="margin: 0 0 30px">Purpose and function</h2>
            <p>
              The shell is perhaps the most crucial piece of any UI built with
              <a href="www.carbondesignsystem.com"> Carbon</a>. It contains the
              shared navigation framework for the entire design system and ties
              the products in IBM’s portfolio together in a cohesive and elegant
              way. The shell is the home of the topmost navigation, where users
              can quickly and dependably gain their bearings and move between
              pages.
              <br />
              <br />
              The shell was designed with maximum flexibility built in, to serve
              the needs of a broad range of products and users. Adopting the
              shell ensures compliance with IBM design standards, simplifies
              development efforts, and provides great user experiences. All IBM
              products built with Carbon are required to use the shell’s header.
              <br />
              <br />
              To better understand the purpose and function of the UI shell,
              consider the “shell” of MacOS, which contains the Apple menu,
              top-level navigation, and universal, OS-level controls at the top
              of the screen, as well as a universal dock along the bottom or
              side of the screen. The Carbon UI shell is roughly analogous in
              function to these parts of the Mac UI. For example, the app
              switcher portion of the shell can be compared to the dock in
              MacOS.
            </p>
            <h2 style="margin: 30px 0px">Header responsive behavior</h2>
            <p>
              As a header scales down to fit smaller screen sizes, headers with
              persistent side nav menus should have the side nav collapse into
              “hamburger” menu. See the example to better understand responsive
              behavior of the header.
            </p>
            <h2 style="margin: 30px 0px">Secondary navigation</h2>
            <p>
              The side-nav contains secondary navigation and fits below the
              header. It can be configured to be either fixed-width or flexible,
              with only one level of nested items allowed. Both links and
              category lists can be used in the side-nav and may be mixed
              together. There are several configurations of the side-nav, but
              only one configuration should be used per product section. If tabs
              are needed on a page when using a side-nav, then the tabs are
              secondary in hierarchy to the side-nav.
            </p>
            <cds-modal>
              <cds-modal-header>
                <cds-modal-close-button></cds-modal-close-button>
                <cds-modal-label>Account resources</cds-modal-label>
                <cds-modal-heading>Add a custom domain</cds-modal-heading>
              </cds-modal-header>
              <cds-modal-body>
                <cds-modal-body-content description>
                  Custom domains direct requests for your apps in this Cloud
                  Foundry organization to a URL that you own. A custom domain
                  can be a shared domain, a shared subdomain, or a shared domain
                  and host.
                </cds-modal-body-content>
              </cds-modal-body>
              <cds-modal-footer>
                <cds-modal-footer-button kind="secondary" data-modal-close
                  >Cancel</cds-modal-footer-button
                >
                <cds-modal-footer-button>Add</cds-modal-footer-button>
              </cds-modal-footer>
            </cds-modal>
            <cds-button @click="${toggleButton}">Launch modal</cds-button>
          </div>
        </div>
      </div>
    </main>
  `;
};

export const FixedSideNav = () => {
  const result = html`
    <style>
      ${styles}
    </style>
    <cds-side-nav
      is-not-child-of-header
      usage-mode="${SIDE_NAV_USAGE_MODE.REGULAR}"
      aria-label="Side navigation"
      collapse-mode="${SIDE_NAV_COLLAPSE_MODE.FIXED}"
      expanded>
      <cds-side-nav-items>
        <cds-side-nav-menu title="L0 menu">
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-menu title="L0 menu">
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item
            active
            aria-current="page"
            href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-menu title="L0 menu">
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-link href="javascript:void(0)">L0 link</cds-side-nav-link>
        <cds-side-nav-link href="javascript:void(0)">L0 link</cds-side-nav-link>
      </cds-side-nav-items>
    </cds-side-nav>
    ${StoryContent({ useResponsiveOffset: false })}
  `;
  (result as any).hasMainTag = true;
  return result;
};

FixedSideNav.storyName = 'Fixed SideNav';

export const FixedSideNavDivider = () => {
  const result = html`
    <style>
      ${styles}
    </style>
    <cds-side-nav
      is-not-child-of-header
      aria-label="Side navigation"
      collapse-mode="${SIDE_NAV_COLLAPSE_MODE.FIXED}"
      expanded>
      <cds-side-nav-items>
        <cds-side-nav-menu title="L0 menu">
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-menu title="L0 menu">
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item
            active
            aria-current="page"
            href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-menu title="L0 menu">
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            L0 menu item
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-divider></cds-side-nav-divider>
        <cds-side-nav-link href="javascript:void(0)">L0 link</cds-side-nav-link>
        <cds-side-nav-link href="javascript:void(0)">L0 link</cds-side-nav-link>
      </cds-side-nav-items>
    </cds-side-nav>
    ${StoryContent({ useResponsiveOffset: false })}
  `;
  (result as any).hasMainTag = true;
  return result;
};

FixedSideNavDivider.storyName = 'Fixed SideNav w/ Divider';

export const FixedSideNavIcons = () => {
  const result = html`
    <style>
      ${styles}
    </style>
    <cds-side-nav
      is-not-child-of-header
      aria-label="Side navigation"
      collapse-mode="${SIDE_NAV_COLLAPSE_MODE.FIXED}"
      expanded>
      <cds-side-nav-items>
        <cds-side-nav-menu title="Category title">
          ${Fade16({ slot: 'title-icon' })}
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-menu title="Category title">
          ${Fade16({ slot: 'title-icon' })}
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item
            active
            aria-current="page"
            href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-menu title="Category title">
          ${Fade16({ slot: 'title-icon' })}
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-link href="javascript:void(0)"
          >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
        >
        <cds-side-nav-link href="javascript:void(0)"
          >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
        >
      </cds-side-nav-items>
    </cds-side-nav>
    ${StoryContent({ useResponsiveOffset: false })}
  `;
  (result as any).hasMainTag = true;
  return result;
};

FixedSideNavIcons.storyName = 'Fixed SideNav w/ Icons';

export const HeaderBase = () => {
  return html` <style>
      ${styles}
    </style>
    <cds-header aria-label="IBM Platform Name">
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
    </cds-header>`;
};

export const HeaderBaseWActions = () => {
  return html` <style>
      ${styles}
    </style>
    <cds-header aria-label="IBM Platform Name">
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
      <div class="${prefix}--header__global">
        <cds-header-global-action aria-label="Search" tooltip-text="Search">
          ${Search20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="Notification"
          tooltip-text="Notification">
          ${Notification20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="App Switcher"
          tooltip-text="App Switcher"
          tooltip-alignment="right">
          ${SwitcherIcon20({ slot: 'icon' })}
        </cds-header-global-action>
      </div>
    </cds-header>`;
};

HeaderBaseWActions.storyName = 'Header Base w/ Actions';

export const HeaderBaseWActionsRightPanel = () => {
  return html` <style>
      ${styles}
    </style>
    <cds-header aria-label="IBM Platform Name">
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
      <div class="${prefix}--header__global">
        <cds-header-global-action aria-label="Search" tooltip-text="Search">
          ${Search20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          active
          aria-label="Notification"
          tooltip-text="Notification">
          ${Notification20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="App Switcher"
          tooltip-text="App Switcher"
          tooltip-alignment="right">
          ${SwitcherIcon20({ slot: 'icon' })}
        </cds-header-global-action>
      </div>
      <cds-header-panel expanded aria-label="Header Panel"></cds-header-panel>
    </cds-header>`;
};

HeaderBaseWActionsRightPanel.storyName =
  'Header Base w/ Actions and Right Panel';

export const HeaderBaseWActionsSwitcher = () => {
  return html` <style>
      ${styles}
    </style>
    <cds-header aria-label="IBM Platform Name">
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
      <div class="${prefix}--header__global">
        <cds-header-global-action aria-label="Search" tooltip-text="Search">
          ${Search20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="Notification"
          tooltip-text="Notification">
          ${Notification20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          button-label-active="Close switcher"
          button-label-inactive="Open switcher"
          tooltip-text="Open switcher"
          panel-id="switcher-panel"
          tooltip-alignment="right">
          ${SwitcherIcon20({ slot: 'icon' })}
        </cds-header-global-action>
      </div>
      <cds-header-panel id="switcher-panel" aria-label="Header Panel">
        <cds-switcher aria-label="Switcher Container">
          <cds-switcher-item aria-label="Link 1" href="#"
            >Link 1</cds-switcher-item
          >
          <cds-switcher-divider></cds-switcher-divider>
          <cds-switcher-item aria-label="Link 2" href="#"
            >Link 2</cds-switcher-item
          >
          <cds-switcher-item aria-label="Link 3" href="#"
            >Link 3</cds-switcher-item
          >
          <cds-switcher-item aria-label="Link 4" href="#"
            >Link 4</cds-switcher-item
          >
          <cds-switcher-item aria-label="Link 5" href="#"
            >Link 5</cds-switcher-item
          >
          <cds-switcher-divider></cds-switcher-divider>
          <cds-switcher-item aria-label="Link 6" href="#"
            >Link 6</cds-switcher-item
          >
        </cds-switcher>
      </cds-header-panel>
    </cds-header>
    ${StoryContent({ useResponsiveOffset: true })}`;
};

HeaderBaseWActionsSwitcher.storyName = 'Header Base w/ Actions and Switcher';

export const HeaderBaseWNavigationActionsAndSideNav = () => {
  return html` <style>
      ${styles}
    </style>
    <cds-header aria-label="IBM Platform Name">
      <cds-header-menu-button
        button-label-active="Close menu"
        button-label-inactive="Open menu"></cds-header-menu-button>
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
      <cds-header-nav menu-bar-label="IBM [Platform]">
        <cds-header-nav-item href="javascript:void 0"
          >Link 1</cds-header-nav-item
        >
        <cds-header-nav-item href="javascript:void 0"
          >Link 2</cds-header-nav-item
        >
        <cds-header-nav-item href="javascript:void 0"
          >Link 3</cds-header-nav-item
        >
        <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 1</cds-header-menu-item
          >
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 2</cds-header-menu-item
          >
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 3</cds-header-menu-item
          >
        </cds-header-menu>
      </cds-header-nav>
      <div class="${prefix}--header__global">
        <cds-header-global-action aria-label="Search" tooltip-text="Search">
          ${Search20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="Notification"
          tooltip-text="Notification">
          ${Notification20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="App Switcher"
          tooltip-text="App Switcher"
          tooltip-alignment="right">
          ${SwitcherIcon20({ slot: 'icon' })}
        </cds-header-global-action>
      </div>
      <cds-side-nav
        aria-label="Side navigation"
        collapse-mode="${SIDE_NAV_COLLAPSE_MODE.RESPONSIVE}">
        <cds-side-nav-items>
          <cds-header-side-nav-items has-divider>
            <cds-side-nav-link href="javascript:void(0)">
              Link 1
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 2
            </cds-side-nav-link>
            <cds-side-nav-link href="javascript:void(0)">
              Link 3
            </cds-side-nav-link>
            <cds-side-nav-menu title="Link 4">
              <cds-side-nav-menu-item href="${linksHref}">
                Sub-link 1
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${linksHref}">
                Sub-link 2
              </cds-side-nav-menu-item>
              <cds-side-nav-menu-item href="${linksHref}">
                Sub-link 3
              </cds-side-nav-menu-item>
            </cds-side-nav-menu>
          </cds-header-side-nav-items>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item aria-current="page" href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item active href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
    </cds-header>
    ${StoryContent({ useResponsiveOffset: true })}`;
};

HeaderBaseWNavigationActionsAndSideNav.storyName =
  'Header Base w/ Navigation, Actions and SideNav';

export const HeaderBaseWNavigationActions = () => {
  return html` <style>
      ${styles}
    </style>
    <cds-header aria-label="IBM Platform Name">
      <cds-header-menu-button
        button-label-active="Close menu"
        button-label-inactive="Open menu"></cds-header-menu-button>
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
      <cds-header-nav menu-bar-label="IBM [Platform]">
        <cds-header-nav-item href="javascript:void 0"
          >Link 1</cds-header-nav-item
        >
        <cds-header-nav-item href="javascript:void 0"
          >Link 2</cds-header-nav-item
        >
        <cds-header-nav-item href="javascript:void 0"
          >Link 3</cds-header-nav-item
        >
        <cds-header-menu is-active menu-label="Link 4" trigger-content="Link 4">
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 1</cds-header-menu-item
          >
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 2</cds-header-menu-item
          >
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 3</cds-header-menu-item
          >
        </cds-header-menu>
      </cds-header-nav>
      <div class="${prefix}--header__global">
        <cds-header-global-action aria-label="Search" tooltip-text="Search">
          ${Search20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="Notification"
          tooltip-text="Notification">
          ${Notification20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="App Switcher"
          tooltip-text="App Switcher"
          tooltip-alignment="right">
          ${SwitcherIcon20({ slot: 'icon' })}
        </cds-header-global-action>
      </div>
      <cds-side-nav
        is-not-persistent
        aria-label="Side navigation"
        collapse-mode="${SIDE_NAV_COLLAPSE_MODE.RESPONSIVE}">
        <cds-side-nav-items>
          <cds-side-nav-link href="javascript:void(0)">
            Link 1
          </cds-side-nav-link>
          <cds-side-nav-link href="javascript:void(0)">
            Link 2
          </cds-side-nav-link>
          <cds-side-nav-link href="javascript:void(0)">
            Link 3
          </cds-side-nav-link>
          <cds-side-nav-menu title="Link 4">
            <cds-side-nav-menu-item href="${linksHref}">
              Sub-link 1
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Sub-link 2
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Sub-link 3
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
        </cds-side-nav-items>
      </cds-side-nav>
    </cds-header>`;
};

HeaderBaseWNavigationActions.storyName =
  'Header Base w/ Navigation and Actions';

export const HeaderBaseWNavigation = () => {
  return html` <style>
      ${styles}
    </style>
    <cds-header aria-label="IBM Platform Name">
      <cds-header-menu-button
        button-label-active="Close menu"
        button-label-inactive="Open menu"></cds-header-menu-button>
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
      <cds-header-nav menu-bar-label="IBM [Platform]">
        <cds-header-nav-item href="javascript:void 0"
          >Link 1</cds-header-nav-item
        >
        <cds-header-nav-item href="javascript:void 0"
          >Link 2</cds-header-nav-item
        >
        <cds-header-nav-item href="javascript:void 0"
          >Link 3</cds-header-nav-item
        >
        <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 1</cds-header-menu-item
          >
          <cds-header-menu-item is-active href="javascript:void 0"
            >Sub-link 2</cds-header-menu-item
          >
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 3</cds-header-menu-item
          >
        </cds-header-menu>
      </cds-header-nav>
      <cds-side-nav
        is-not-persistent
        aria-label="Side navigation"
        collapse-mode="${SIDE_NAV_COLLAPSE_MODE.RESPONSIVE}">
        <cds-side-nav-items>
          <cds-side-nav-link href="javascript:void(0)">
            Link 1
          </cds-side-nav-link>
          <cds-side-nav-link href="javascript:void(0)">
            Link 2
          </cds-side-nav-link>
          <cds-side-nav-link href="javascript:void(0)">
            Link 3
          </cds-side-nav-link>
          <cds-side-nav-menu title="Link 4">
            <cds-side-nav-menu-item href="${linksHref}">
              Sub-link 1
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Sub-link 2
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Sub-link 3
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
        </cds-side-nav-items>
      </cds-side-nav>
    </cds-header>`;
};

HeaderBaseWNavigation.storyName = 'Header Base w/ Navigation';

export const HeaderBaseWSideNav = () => {
  const result = html`
    <style>
      ${styles}
    </style>
    <cds-header aria-label="IBM Platform Name">
      <cds-header-menu-button
        button-label-active="Close menu"
        button-label-inactive="Open menu"></cds-header-menu-button>
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
      <cds-side-nav
        aria-label="Side navigation"
        collapse-mode="${SIDE_NAV_COLLAPSE_MODE.RESPONSIVE}">
        <cds-side-nav-items>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
    </cds-header>
    ${StoryContent({ useResponsiveOffset: true })}
  `;
  (result as any).hasMainTag = true;
  return result;
};

HeaderBaseWSideNav.storyName = 'Header Base w/ SideNav';

export const HeaderBaseWSkipToContent = () => {
  return html` <style>
      ${styles}
    </style>
    <cds-header aria-label="IBM Platform Name">
      <cds-skip-to-content></cds-skip-to-content>
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
      <div class="${prefix}--header__global">
        <cds-header-global-action aria-label="Search" tooltip-text="Search">
          ${Search20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="Notification"
          tooltip-text="Notification">
          ${Notification20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="App Switcher"
          tooltip-text="App Switcher"
          tooltip-alignment="right">
          ${SwitcherIcon20({ slot: 'icon' })}
        </cds-header-global-action>
      </div>
    </cds-header>
    ${StoryContent({ useResponsiveOffset: true })}`;
};

HeaderBaseWSkipToContent.storyName = 'Header Base w/ SkipToContent';

export const SideNavRail = () => {
  return html` <style>
      ${styles}
    </style>
    <cds-side-nav
      aria-label="Side navigation"
      collapse-mode="${SIDE_NAV_COLLAPSE_MODE.RAIL}">
      <cds-side-nav-items>
        <cds-side-nav-menu title="Category title">
          ${Fade16({ slot: 'title-icon' })}
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item
            active
            aria-current="page"
            href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-menu title="Category title">
          ${Fade16({ slot: 'title-icon' })}
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-menu title="Category title">
          ${Fade16({ slot: 'title-icon' })}
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Link
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-link href="javascript:void(0)"
          >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
        >
        <cds-side-nav-link href="javascript:void(0)"
          >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
        >
      </cds-side-nav-items>
    </cds-side-nav>
    ${StoryContent({ useResponsiveOffset: true })}`;
};

SideNavRail.storyName = 'SideNav Rail';

export const SideNavRailWHeader = () => {
  return html` <style>
      ${styles}
    </style>
    <cds-header aria-label="IBM Platform Name">
      <cds-header-menu-button
        button-label-active="Close menu"
        button-label-inactive="Open menu"></cds-header-menu-button>
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
      <cds-header-nav menu-bar-label="IBM [Platform]">
        <cds-header-nav-item href="javascript:void 0"
          >Link 1</cds-header-nav-item
        >
        <cds-header-nav-item href="javascript:void 0"
          >Link 2</cds-header-nav-item
        >
        <cds-header-nav-item href="javascript:void 0"
          >Link 3</cds-header-nav-item
        >
        <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 1</cds-header-menu-item
          >
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 2</cds-header-menu-item
          >
          <cds-header-menu-item href="javascript:void 0"
            >Sub-link 3</cds-header-menu-item
          >
        </cds-header-menu>
      </cds-header-nav>
      <div class="${prefix}--header__global">
        <cds-header-global-action aria-label="Search" tooltip-text="Search">
          ${Search20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="Notification"
          tooltip-text="Notification">
          ${Notification20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="App Switcher"
          tooltip-text="App Switcher"
          tooltip-alignment="right">
          ${SwitcherIcon20({ slot: 'icon' })}
        </cds-header-global-action>
      </div>
      <cds-side-nav
        aria-label="Side navigation"
        collapse-mode="${SIDE_NAV_COLLAPSE_MODE.RAIL}">
        <cds-side-nav-items>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item
              active
              aria-current="page"
              href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-menu title="Category title">
            ${Fade16({ slot: 'title-icon' })}
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
            <cds-side-nav-menu-item href="${linksHref}">
              Link
            </cds-side-nav-menu-item>
          </cds-side-nav-menu>
          <cds-side-nav-link href="javascript:void(0)"
            >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >${Fade16({ slot: 'title-icon' })}Link</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
    </cds-header>
    ${StoryContent({ useResponsiveOffset: true })}`;
};

SideNavRailWHeader.storyName = 'SideNav Rail w/ Header';

export const SideNavWLargeSideNavItems = () => {
  const result = html`
    <style>
      ${styles}
    </style>
    <cds-side-nav
      is-not-child-of-header
      aria-label="Side navigation"
      collapse-mode="${SIDE_NAV_COLLAPSE_MODE.FIXED}"
      expanded>
      <cds-side-nav-items>
        <cds-side-nav-menu large title="Large menu">
          <cds-side-nav-menu-item href="${linksHref}">
            Menu 1
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Menu 2
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Menu 3
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-link large href="javascript:void(0)"
          >Large link</cds-side-nav-link
        >
        <cds-side-nav-menu large title="Large menu w/icon"
          >${Fade16({ slot: 'title-icon' })}
          <cds-side-nav-menu-item href="${linksHref}">
            Menu 1
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Menu 2
          </cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="${linksHref}">
            Menu 3
          </cds-side-nav-menu-item>
        </cds-side-nav-menu>
        <cds-side-nav-link large href="javascript:void(0)">
          ${Fade16({ slot: 'title-icon' })} Large link w/icon</cds-side-nav-link
        >
      </cds-side-nav-items>
    </cds-side-nav>
    ${StoryContent({ useResponsiveOffset: true })}
  `;
  (result as any).hasMainTag = true;
  return result;
};

SideNavWLargeSideNavItems.storyName = 'SideNav w/ large side nav items';

export default {
  title: 'Components/UI Shell',
  parameters: {
    ...storyDocs.parameters,
  },
};
