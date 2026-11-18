/**
 * Company footer: HYPΞRCLOUD brand, Luigi OS tagline, the products (same list and colours as the cards),
 * language selector and copyright. Built only with Go.create, like app-header.
 */
export default {
  beforeRender: function () {
    const apps = Go.do("apps:list");

    Go.create({
      tag: "div",
      class: "contain",
      target: this,
      childrens: [
        {
          // Product spectrum: one band per product, in its own colours.
          tag: "div",
          class: "spectrum",
          childrens: apps.map((app) => ({
            tag: "span",
            style: { "--color1": Go.getProp(app, "colors.0"), "--color2": Go.getProp(app, "colors.1") },
          })),
        },
        {
          tag: "div",
          class: "top",
          childrens: [
            {
              tag: "div",
              class: "brand",
              childrens: [
                {
                  tag: "a",
                  class: "logo",
                  href: Go.getProp(apps, "0.src"),
                  target: "_blank",
                  childrens: [
                    { tag: "picture", style: { "--icon": `url(${Go.env("app_icon")})` } },
                    {
                      tag: "div",
                      childrens: [
                        { tag: "div", class: "appName", html: Go.create_tags(Go.env("company_caligraphy").split("").join(" ")) },
                        { tag: "div", class: "tagline", html: `${Go.lang("app_name")} · ${Go.lang("app_description")}` },
                      ],
                    },
                  ],
                },
                { tag: "p", class: "about", html: Go.lang("footer_about") },
                {
                  tag: "a",
                  class: "cta",
                  href: Go.getProp(apps, "0.src"),
                  target: "_blank",
                  html: Go.lang("footer_open"),
                },
              ],
            },
            {
              tag: "nav",
              class: "products",
              childrens: [
                { tag: "div", class: "caption", html: Go.lang("footer_products") },
                ...apps.map((app) => ({
                  tag: "a",
                  href: Go.getProp(app, "src"),
                  target: "_blank",
                  style: { "--color1": Go.getProp(app, "colors.0"), "--color2": Go.getProp(app, "colors.1") },
                  childrens: [
                    { tag: "picture", style: { "--icon": `url(${Go.getProp(app, "icon")})` } },
                    { tag: "span", html: Go.getProp(app, "name") },
                  ],
                })),
              ],
            },
          ],
        },
        {
          tag: "div",
          class: "bottom",
          childrens: [
            { tag: "div", class: "copy", html: `© ${new Date().getFullYear()} ${Go.env("company_name")} · ${Go.lang("footer_rights")}` },
            { tag: "go-button", icon: "globe", html: Go.lang("language"), onclick: () => Go.do("language:select") },
          ],
        },
        {
          // Large faded wordmark behind everything.
          tag: "div",
          class: "watermark",
          html: Go.env("company_caligraphy"),
        },
      ],
    });
  },
};
