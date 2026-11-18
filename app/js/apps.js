Go.set("apps:list", function () {
  return [
    {
      name: Go.lang("operative_system"),
      icon: "/app/img/icons/512x512.png",
      src: "https://www.luigios.com/app/luigios/",
      description: Go.lang("operative_system_description"),
      colors: ["#0456fb", "#0498fb"],
    },
    {
      name: Go.lang("apps"),
      icon: "/app/img/all/apps.png",
      src: "https://www.luigios.com/app/desktop/",
      description: Go.lang("apps_description"),
      colors: ["#6d28d9", "#db2777"],
    },
    {
      name: Go.lang("games"),
      icon: "/app/img/all/games.png",
      src: "https://www.luigios.com/app/games/",
      description: Go.lang("games_description"),
      colors: ["#f97316", "#dc2626"],
    },
    {
      name: Go.lang("news"),
      icon: "/app/img/all/news.png",
      src: "https://www.luigios.com/app/news/",
      description: Go.lang("news_description"),
      colors: ["#7c3aed", "#2563eb"],
    },
    {
      name: Go.lang("sdk"),
      icon: "/app/img/all/go.png",
      src: "https://www.luigios.com/app/go-sdk/",
      description: Go.lang("go_sdk_description"),
      colors: ["#f59e0b", "#d97706"],
    },
  ];
});

Go.set("apps:app", function (app, index) {
  return {
    tag: "a",
    class: "appIcon",
    href: Go.getProp(app, "src", `/app/${Go.getProp(app, "name")}`),
    target: "_blank",
    style: {
      "--color1": `${Go.getProp(app, "colors.0")}`,
      "--color2": `${Go.getProp(app, "colors.1")}`,
    },
    childrens: [
      { tag: "picture", class: "icon", style: { "--icon": `url(${Go.getProp(app, "icon")})` } },
      { tag: "div", class: "name", html: Go.getProp(app, "name") },
      { tag: "div", class: "description", html: Go.getProp(app, "description") },
    ],
    animation: {
      delay: 50 * index,
      from: { opacity: 0, transform: "translateX(50px) scale(1.5)" },
      to: { opacity: 1, transform: "translateX(0) scale(1)" },
    },
  };
});
