import{_ as m}from"./AuthenticatedLayout-d00bae49.js";import{o as i,f as d,a as o,u as a,w as c,F as r,Z as _,b as t,t as s,i as p,j as h,g as f}from"./app-ae2ccdd3.js";const w={class:"py-12 bg-gray"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},g={class:"bg-gray-700 overflow-hidden max-w-2xl py-4 mx-auto sm:px-6 lg:px-4 pb-20"},y={class:"flex justify-between items-center"},b={class:"font-bold text-lg text-white py-2"},v={class:"flex space-x-2"},k=t("img",{src:"/img/Edit_fill.png",alt:"Редактировать",class:"block h-10 w-auto m-auto"},null,-1),j=t("img",{src:"/img/Trash.png",alt:"Удалить",class:"block h-10 w-auto m-auto"},null,-1),B=t("img",{src:"/img/Close_round.png",alt:"Отмена",class:"block h-10 w-auto m-auto"},null,-1),C={class:"grid grid-cols-5 max-w-md"},N=t("div",null,[t("table",{class:"w-full text-sm text-left px-6"},[t("tbody",{class:"text-white"},[t("p",{class:"py-4 font-medium whitespace-nowrap"}," Артикул "),t("p",{class:"py-4 font-medium whitespace-nowrap"}," Название "),t("p",{class:"py-4 font-medium whitespace-nowrap"}," Статус "),t("p",{class:"py-4 font-medium whitespace-nowrap"}," Атрибуты ")])])],-1),V={class:"w-full text-sm text-left text-white"},E={class:"text-white"},F={class:"px-6 py-4 font-medium whitespace-nowrap"},D={class:"px-6 py-4 font-medium whitespace-nowrap"},L={class:"px-6 py-4 font-medium whitespace-nowrap"},O={class:"px-6 py-4 font-medium whitespace-nowrap"},S={class:"px-6 font-medium whitespace-nowrap"},q={__name:"card",props:{product:{type:Object}},setup(u){const e=u;return console.log(e.product.article),(l,T)=>(i(),d(r,null,[o(a(_),{title:"Карточка продукта"}),o(m,null,{default:c(()=>[t("div",w,[t("div",x,[t("div",g,[t("div",y,[t("h3",b,s(e.product.name),1),t("div",v,[o(a(p),{href:l.route("products.edit",e.product.id),class:"font-medium text-blue-600"},{default:c(()=>[k]),_:1},8,["href"]),o(a(p),{href:l.route("products.delete",e.product.id),class:"font-medium text-red-600"},{default:c(()=>[j]),_:1},8,["href"]),o(a(p),{href:l.route("products"),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:c(()=>[B]),_:1},8,["href"])])]),t("div",C,[N,t("div",null,[t("table",V,[t("tbody",E,[t("p",F,s(e.product.article),1),t("p",D,s(e.product.name),1),t("p",L,s(e.product.status),1),t("span",O,[e.product.data?(i(!0),d(r,{key:0},h(e.product.data.attributes,n=>(i(),d("p",S,s(n.name)+": "+s(n.value),1))),256)):f("",!0)])])])])])])])])]),_:1})],64))}};export{q as default};
