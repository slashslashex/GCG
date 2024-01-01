import { unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-8fe7e5b7.js";
import "./TextInput-2100b170.js";
import "./PrimaryButton-373a10a0.js";
import { Head, Link } from "@inertiajs/vue3";
import "./ApplicationLogo-39de4a32.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "list",
  __ssrInlineRender: true,
  props: {
    products: {
      type: Object
    },
    status: String
  },
  setup(__props) {
    const props = __props;
    const productCard = (id) => {
      const routeUrl = route("product.card", { id });
      window.location.href = routeUrl;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Добавить продукт" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto sm:px-6"${_scopeId}><div class="float-right flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products.create"),
              class: "sm:px-4 py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-700 max-w-max"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Добавить `);
                } else {
                  return [
                    createTextVNode(" Добавить ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.url.includes("/products")) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.$page.url.includes("/products/available") ? _ctx.route("products") : _ctx.route("products.available"),
                class: "sm:px-4 py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-700"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$page.url.includes("/products/available") ? "Все продукты" : "Показать только доступные")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$page.url.includes("/products/available") ? "Все продукты" : "Показать только доступные"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="bg-gray p-4 overflow-x-auto"${_scopeId}>`);
            if (__props.status) {
              _push2(`<div class="flex items-center justify-center w-full p-3 text-sm text-lg font-medium text-green-600 bg-blue-200"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<table class="w-full text-sm text-left text-gray-500"${_scopeId}><thead class="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray border-b"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3"${_scopeId}> Артикул </th><th scope="col" class="px-6 py-3"${_scopeId}> Название </th><th scope="col" class="px-6 py-3"${_scopeId}> Статус </th><th scope="col" class="px-6 py-3"${_scopeId}> Атрибуты </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(props.products, (products, index) => {
              _push2(`<tr class="bg-white border-b hover:bg-gray-700 cursor-pointer"${_scopeId}><td class="px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap"${_scopeId}>${ssrInterpolate(products.article)}</td><td class="px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap"${_scopeId}>${ssrInterpolate(products.name)}</td><td class="px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap"${_scopeId}>${ssrInterpolate(products.status)}</td><td class="px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap"${_scopeId}>`);
              if (products.data) {
                _push2(`<!--[-->`);
                ssrRenderList(products.data.attributes, (attribute) => {
                  _push2(`<p${_scopeId}>${ssrInterpolate(attribute.name)}: ${ssrInterpolate(attribute.value)}</p>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto sm:px-6" }, [
                createVNode("div", { class: "float-right flex flex-col" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("products.create"),
                    class: "sm:px-4 py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-700 max-w-max"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Добавить ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  _ctx.$page.url.includes("/products") ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.$page.url.includes("/products/available") ? _ctx.route("products") : _ctx.route("products.available"),
                    class: "sm:px-4 py-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$page.url.includes("/products/available") ? "Все продукты" : "Показать только доступные"), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "bg-gray p-4 overflow-x-auto" }, [
                  __props.status ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex items-center justify-center w-full p-3 text-sm text-lg font-medium text-green-600 bg-blue-200"
                  }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                  createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [
                    createVNode("thead", { class: "text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray border-b" }, [
                      createVNode("tr", null, [
                        createVNode("th", {
                          scope: "col",
                          class: "px-6 py-3"
                        }, " Артикул "),
                        createVNode("th", {
                          scope: "col",
                          class: "px-6 py-3"
                        }, " Название "),
                        createVNode("th", {
                          scope: "col",
                          class: "px-6 py-3"
                        }, " Статус "),
                        createVNode("th", {
                          scope: "col",
                          class: "px-6 py-3"
                        }, " Атрибуты ")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.products, (products, index) => {
                        return openBlock(), createBlock("tr", {
                          key: index,
                          class: "bg-white border-b hover:bg-gray-700 cursor-pointer",
                          onClick: ($event) => productCard(products.id)
                        }, [
                          createVNode("td", { class: "px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap" }, toDisplayString(products.article), 1),
                          createVNode("td", { class: "px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap" }, toDisplayString(products.name), 1),
                          createVNode("td", { class: "px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap" }, toDisplayString(products.status), 1),
                          createVNode("td", { class: "px-6 py-4 font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap" }, [
                            products.data ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(products.data.attributes, (attribute) => {
                              return openBlock(), createBlock("p", null, toDisplayString(attribute.name) + ": " + toDisplayString(attribute.value), 1);
                            }), 256)) : createCommentVNode("", true)
                          ])
                        ], 8, ["onClick"]);
                      }), 128))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
