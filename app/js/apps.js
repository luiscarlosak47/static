Go.set("apps:list", function () {
  return [
    {
      name: Go.lang("operative_system"),
      badge: Go.lang("badge_cloud"),
      icon: "/app/img/icons/512x512.png",
      src: "https://www.luigios.com/app/luigios/",
      description: Go.lang("operative_system_description"),
      colors: ["#0456fb", "#0498fb"],
    },
    {
      name: Go.lang("apps"),
      badge: Go.lang("badge_productivity"),
      icon: "/app/img/all/apps.png",
      src: "https://www.luigios.com/app/desktop/",
      description: Go.lang("apps_description"),
      colors: ["#6d28d9", "#db2777"],
    },
    {
      name: Go.lang("games"),
      badge: Go.lang("badge_entertainment"),
      icon: "/app/img/all/games.png",
      src: "https://www.luigios.com/app/games/",
      description: Go.lang("games_description"),
      colors: ["#f97316", "#dc2626"],
    },
    {
      name: Go.lang("news"),
      badge: Go.lang("badge_news"),
      icon: "/app/img/all/news.png",
      src: "https://www.luigios.com/app/news/",
      description: Go.lang("news_description"),
      colors: ["#7c3aed", "#2563eb"],
    },
    {
      name: Go.lang("sdk"),
      badge: Go.lang("badge_developers"),
      icon: "/app/img/all/go.png",
      src: "https://www.luigios.com/app/go-sdk/",
      description: Go.lang("go_sdk_description"),
      colors: ["#f59e0b", "#d97706"],
    },
  ];
});

/**
 * One glass card per app (its colours tint the card, the ring and the wave). The first app, Luigi OS, is the hero:
 * big ring with its icon, what it includes (the other apps) and an "open" call to action.
 */
Go.set("apps:app", function (app, index) {
  const icon = Go.getProp(app, "icon");
  const style = {
    "--color1": `${Go.getProp(app, "colors.0")}`,
    "--color2": `${Go.getProp(app, "colors.1")}`,
    "--icon": `url(${icon})`,
  };
  const ring = (cls = "") => ({
    tag: "div",
    class: `ringWrap ${cls}`,
    childrens: [{ tag: "div", class: "ring" }, { tag: "picture", class: "icon" }],
  });
  const badge = { tag: "span", class: "badge", html: Go.getProp(app, "badge") };

  const childrens = index
    ? [
        {
          tag: "div",
          class: "cardHead",
          childrens: [{ tag: "span", class: "bubble" }, { tag: "div", class: "name", html: Go.getProp(app, "name") }, badge],
        },
        {
          tag: "div",
          class: "cardBody",
          childrens: [{ tag: "div", class: "description", html: Go.getProp(app, "description") }, ring()],
        },
      ]
    : [
        ring("heroRing"),
        {
          tag: "div",
          class: "heroBody",
          childrens: [
            badge,
            { tag: "div", class: "name", html: Go.getProp(app, "name") },
            { tag: "div", class: "description", html: Go.getProp(app, "description") },
            {
              tag: "div",
              class: "includes",
              childrens: [
                { tag: "span", html: Go.lang("includes") },
                ...Go.do("apps:list")
                  .slice(1)
                  .map((other) => ({ tag: "i", attrs: { title: Go.getProp(other, "name") }, style: { "--icon": `url(${Go.getProp(other, "icon")})` } })),
              ],
            },
            { tag: "span", class: "cta", html: `${Go.lang("open")} ${Go.lang("app_name")} →` },
          ],
        },
      ];

  return {
    tag: "a",
    class: `appIcon${index ? "" : " hero"}`,
    href: Go.getProp(app, "src", `/app/${Go.getProp(app, "name")}`),
    target: "_blank",
    style,
    childrens,
    animation: {
      delay: 60 * index,
      from: { opacity: 0, transform: "translateY(24px) scale(0.98)" },
      to: { opacity: 1, transform: "translateY(0) scale(1)" },
    },
  };
});
