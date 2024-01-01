import { unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-8fe7e5b7.js";
import { Head, Link } from "@inertiajs/vue3";
import "./ApplicationLogo-39de4a32.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "card",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    console.log(props.product.article);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Карточка продукта" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 bg-gray"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-gray-700 overflow-hidden max-w-2xl py-4 mx-auto sm:px-6 lg:px-4 pb-20"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h3 class="font-bold text-lg text-white py-2"${_scopeId}>${ssrInterpolate(props.product.name)}</h3><div class="flex space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products.edit", props.product.id),
              class: "font-medium text-blue-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/img/Edit_fill.png" alt="Редактировать" class="block h-10 w-auto m-auto"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/img/Edit_fill.png",
                      alt: "Редактировать",
                      class: "block h-10 w-auto m-auto"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products.delete", props.product.id),
              class: "font-medium text-red-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/img/Trash.png" alt="Удалить" class="block h-10 w-auto m-auto"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/img/Trash.png",
                      alt: "Удалить",
                      class: "block h-10 w-auto m-auto"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products"),
              class: "font-medium text-blue-600 dark:text-blue-500 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/img/Close_round.png" alt="Отмена" class="block h-10 w-auto m-auto"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/img/Close_round.png",
                      alt: "Отмена",
                      class: "block h-10 w-auto m-auto"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-5 max-w-md"${_scopeId}><div${_scopeId}><table class="w-full text-sm text-left px-6"${_scopeId}><tbody class="text-white"${_scopeId}><p class="py-4 font-medium whitespace-nowrap"${_scopeId}> Артикул </p><p class="py-4 font-medium whitespace-nowrap"${_scopeId}> Название </p><p class="py-4 font-medium whitespace-nowrap"${_scopeId}> Статус </p><p class="py-4 font-medium whitespace-nowrap"${_scopeId}> Атрибуты </p></tbody></table></div><div${_scopeId}><table class="w-full text-sm text-left text-white"${_scopeId}><tbody class="text-white"${_scopeId}><p class="px-6 py-4 font-medium whitespace-nowrap"${_scopeId}>${ssrInterpolate(props.product.article)}</p><p class="px-6 py-4 font-medium whitespace-nowrap"${_scopeId}>${ssrInterpolate(props.product.name)}</p><p class="px-6 py-4 font-medium whitespace-nowrap"${_scopeId}>${ssrInterpolate(props.product.status)}</p><span class="px-6 py-4 font-medium whitespace-nowrap"${_scopeId}>`);
            if (props.product.data) {
              _push2(`<!--[-->`);
              ssrRenderList(props.product.data.attributes, (attribute) => {
                _push2(`<p class="px-6 font-medium whitespace-nowrap"${_scopeId}>${ssrInterpolate(attribute.name)}: ${ssrInterpolate(attribute.value)}</p>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span></tbody></table></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 bg-gray" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-gray-700 overflow-hidden max-w-2xl py-4 mx-auto sm:px-6 lg:px-4 pb-20" }, [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("h3", { class: "font-bold text-lg text-white py-2" }, toDisplayString(props.product.name), 1),
                      createVNode("div", { class: "flex space-x-2" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("products.edit", props.product.id),
                          class: "font-medium text-blue-600"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: "/img/Edit_fill.png",
                              alt: "Редактировать",
                              class: "block h-10 w-auto m-auto"
                            })
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("products.delete", props.product.id),
                          class: "font-medium text-red-600"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: "/img/Trash.png",
                              alt: "Удалить",
                              class: "block h-10 w-auto m-auto"
                            })
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("products"),
                          class: "font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: "/img/Close_round.png",
                              alt: "Отмена",
                              class: "block h-10 w-auto m-auto"
                            })
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-5 max-w-md" }, [
                      createVNode("div", null, [
                        createVNode("table", { class: "w-full text-sm text-left px-6" }, [
                          createVNode("tbody", { class: "text-white" }, [
                            createVNode("p", { class: "py-4 font-medium whitespace-nowrap" }, " Артикул "),
                            createVNode("p", { class: "py-4 font-medium whitespace-nowrap" }, " Название "),
                            createVNode("p", { class: "py-4 font-medium whitespace-nowrap" }, " Статус "),
                            createVNode("p", { class: "py-4 font-medium whitespace-nowrap" }, " Атрибуты ")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("table", { class: "w-full text-sm text-left text-white" }, [
                          createVNode("tbody", { class: "text-white" }, [
                            createVNode("p", { class: "px-6 py-4 font-medium whitespace-nowrap" }, toDisplayString(props.product.article), 1),
                            createVNode("p", { class: "px-6 py-4 font-medium whitespace-nowrap" }, toDisplayString(props.product.name), 1),
                            createVNode("p", { class: "px-6 py-4 font-medium whitespace-nowrap" }, toDisplayString(props.product.status), 1),
                            createVNode("span", { class: "px-6 py-4 font-medium whitespace-nowrap" }, [
                              props.product.data ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(props.product.data.attributes, (attribute) => {
                                return openBlock(), createBlock("p", { class: "px-6 font-medium whitespace-nowrap" }, toDisplayString(attribute.name) + ": " + toDisplayString(attribute.value), 1);
                              }), 256)) : createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
