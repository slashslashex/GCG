import { unref, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vModelSelect, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-8fe7e5b7.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./TextInput-2100b170.js";
import { P as PrimaryButton } from "./PrimaryButton-373a10a0.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "./ApplicationLogo-39de4a32.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      article: "",
      name: "",
      status: "",
      attributesData: {
        attributes: []
      }
    });
    const addAttribute = () => {
      form.attributesData.attributes.push({ name: "", value: "" });
    };
    const removeAttribute = (index) => {
      form.attributesData.attributes.splice(index, 1);
    };
    const submit = () => {
      form.post(route("products.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Добавить продукт" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 bg-gray"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-gray-700 overflow-hidden shadow-sm max-w-2xl py-4 mx-auto sm:px-6 lg:px-4"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h3 class="font-bold text-lg text-white"${_scopeId}>Добавить продукт</h3><div class="flex space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products"),
              class: "font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
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
            _push2(`</div></div><form class="max-w-md flex flex-col"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "article",
              value: "Артикул",
              class: "text-white mt-6"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "article",
              type: "text",
              class: "block w-full",
              modelValue: unref(form).article,
              "onUpdate:modelValue": ($event) => unref(form).article = $event,
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.article
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Название",
              class: "text-white mt-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "status",
              value: "Статус",
              class: "text-white mt-4"
            }, null, _parent2, _scopeId));
            _push2(`<select id="status" class="mt-1 block w-full" autofocus${_scopeId}><option value="available"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "available") : ssrLooseEqual(unref(form).status, "available")) ? " selected" : ""}${_scopeId}>Доступен</option><option value="unavailable"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "unavailable") : ssrLooseEqual(unref(form).status, "unavailable")) ? " selected" : ""}${_scopeId}>Недоступен</option></select>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.status
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "attributes",
              value: "Атрибуты",
              class: "text-white mt-3 mb-5"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><!--[-->`);
            ssrRenderList(unref(form).attributesData.attributes, (attribute, index) => {
              _push2(`<div class="flex items-center mb-4"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                for: "attributes",
                value: "Название",
                class: "text-white"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                modelValue: attribute.name,
                "onUpdate:modelValue": ($event) => attribute.name = $event,
                type: "text",
                class: "mt-1 block w-full",
                placeholder: "Название"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="ml-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                for: "attributes",
                value: "Значение",
                class: "text-white"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                modelValue: attribute.value,
                "onUpdate:modelValue": ($event) => attribute.value = $event,
                type: "text",
                class: "mt-1 block w-full",
                placeholder: "Значение"
              }, null, _parent2, _scopeId));
              _push2(`</div><button class="ml-2 text-red-500 mt-6"${_scopeId}><img src="/img/Trash.png" alt="-" class="block h-10"${_scopeId}></button></div>`);
            });
            _push2(`<!--]--></div><button class="mt-2 text-blue-400"${_scopeId}>+ Добавить атрибут</button></div><div class="flex float-left"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["w-42 my-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
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
            _push2(`</div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 bg-gray" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-gray-700 overflow-hidden shadow-sm max-w-2xl py-4 mx-auto sm:px-6 lg:px-4" }, [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("h3", { class: "font-bold text-lg text-white" }, "Добавить продукт"),
                      createVNode("div", { class: "flex space-x-2" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("products"),
                          class: "font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
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
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      class: "max-w-md flex flex-col"
                    }, [
                      createVNode("div", null, [
                        createVNode(_sfc_main$2, {
                          for: "article",
                          value: "Артикул",
                          class: "text-white mt-6"
                        }),
                        createVNode(_sfc_main$3, {
                          id: "article",
                          type: "text",
                          class: "block w-full",
                          modelValue: unref(form).article,
                          "onUpdate:modelValue": ($event) => unref(form).article = $event,
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: unref(form).errors.article
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_sfc_main$2, {
                          for: "name",
                          value: "Название",
                          class: "text-white mt-4"
                        }),
                        createVNode(_sfc_main$3, {
                          id: "name",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: unref(form).errors.name
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_sfc_main$2, {
                          for: "status",
                          value: "Статус",
                          class: "text-white mt-4"
                        }),
                        withDirectives(createVNode("select", {
                          id: "status",
                          class: "mt-1 block w-full",
                          "onUpdate:modelValue": ($event) => unref(form).status = $event,
                          autofocus: ""
                        }, [
                          createVNode("option", { value: "available" }, "Доступен"),
                          createVNode("option", { value: "unavailable" }, "Недоступен")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).status]
                        ]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: unref(form).errors.status
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_sfc_main$2, {
                          for: "attributes",
                          value: "Атрибуты",
                          class: "text-white mt-3 mb-5"
                        }),
                        createVNode("div", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).attributesData.attributes, (attribute, index) => {
                            return openBlock(), createBlock("div", {
                              key: index,
                              class: "flex items-center mb-4"
                            }, [
                              createVNode("div", null, [
                                createVNode(_sfc_main$2, {
                                  for: "attributes",
                                  value: "Название",
                                  class: "text-white"
                                }),
                                createVNode(_sfc_main$3, {
                                  modelValue: attribute.name,
                                  "onUpdate:modelValue": ($event) => attribute.name = $event,
                                  type: "text",
                                  class: "mt-1 block w-full",
                                  placeholder: "Название"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode(_sfc_main$2, {
                                  for: "attributes",
                                  value: "Значение",
                                  class: "text-white"
                                }),
                                createVNode(_sfc_main$3, {
                                  modelValue: attribute.value,
                                  "onUpdate:modelValue": ($event) => attribute.value = $event,
                                  type: "text",
                                  class: "mt-1 block w-full",
                                  placeholder: "Значение"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("button", {
                                onClick: withModifiers(($event) => removeAttribute(index), ["prevent"]),
                                class: "ml-2 text-red-500 mt-6"
                              }, [
                                createVNode("img", {
                                  src: "/img/Trash.png",
                                  alt: "-",
                                  class: "block h-10"
                                })
                              ], 8, ["onClick"])
                            ]);
                          }), 128))
                        ]),
                        createVNode("button", {
                          onClick: withModifiers(addAttribute, ["prevent"]),
                          class: "mt-2 text-blue-400"
                        }, "+ Добавить атрибут")
                      ]),
                      createVNode("div", { class: "flex float-left" }, [
                        createVNode(PrimaryButton, {
                          class: ["w-42 my-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Добавить ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
