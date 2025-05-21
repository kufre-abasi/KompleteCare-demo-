import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useQuery } from '@vue/apollo-composable';
import { I as INVESTIGATIONS_REQUEST } from './testAPI-C7AxJmyq.mjs';
import { _ as _export_sfc, d as useCookie, u as useRouter } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'graphql-tag';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:url';
import 'node:net';
import 'vue-router';
import '@apollo/client/core/index.js';
import '@apollo/client/link/error/index.js';

const _imports_0 = publicAssetsURL("/icons/inbox.svg");
const _imports_1 = publicAssetsURL("/icons/notification.svg");
const _imports_2 = publicAssetsURL("/icons/myProfile.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "jjindex",
  __ssrInlineRender: true,
  setup(__props) {
    const { result, loading: showLoading } = useQuery(INVESTIGATIONS_REQUEST);
    const investigationsArray = ref([]);
    useCookie("auth_token");
    useRouter();
    const activeStyle = {
      backgroundColor: "#2A36A4",
      color: "white"
    };
    const inactiveStyle = {
      color: "#A0A0A0"
    };
    const navItems = [
      { icon: "dashboard.svg", text: "Dashboard", active: true },
      { icon: "profile.svg", text: "Profile", active: false },
      { icon: "service.svg", text: "Services", active: false },
      { icon: "medRecord.svg", text: "Medical Records", active: false },
      { icon: "wallet.svg", text: "Care Wallet", active: false },
      { icon: "message.svg", text: "Messages", active: false },
      { icon: "resources.svg", text: "Resources", active: false },
      {
        icon: "settings.svg",
        text: "Account Settings",
        active: false,
        style: {
          "border-top": "1px solid #DFE0EB"
        }
      },
      { icon: "support.svg", text: "Contact Support", active: false },
      { icon: "logout.svg", text: "Logout", active: false }
    ];
    watch(result, (data) => {
      investigationsArray.value = data;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "container-fluid px-0",
        style: { "background": "#f5f5fb" }
      }, _attrs))} data-v-60db455a><div class="row g-0" mx-0 data-v-60db455a><div class="col-md-2 d-none d-md-block sidebar" style="${ssrRenderStyle({ "background": "#ffff" })}" data-v-60db455a><ul class="nav flex-column custom-mt hidden" data-v-60db455a><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li class="nav-item" style="${ssrRenderStyle(item.style)}" data-v-60db455a>`);
        if (item.text !== "Logout") {
          _push(`<a style="${ssrRenderStyle([{}, item.active ? activeStyle : inactiveStyle])}" class="${ssrRenderClass([{ active: item.active }, "nav-link"])}" data-v-60db455a><img${ssrRenderAttr("src", "/icons/" + item.icon)}${ssrRenderAttr("alt", item.text)} class="nav-icon me-3" data-v-60db455a> ${ssrInterpolate(item.text)}</a>`);
        } else {
          _push(`<button style="${ssrRenderStyle(item.active ? activeStyle : inactiveStyle)}" class="logOut" data-v-60db455a><img${ssrRenderAttr("src", "/icons/" + item.icon)}${ssrRenderAttr("alt", item.text)} class="nav-icon me-3" data-v-60db455a> ${ssrInterpolate(item.text)}</button>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="col-md-10 hidden" data-v-60db455a><div class="d-flex align-items-center justify-content-end gap-4 border-5 mt-5" data-v-60db455a><p class="mb-0" data-v-60db455a>Take a tour</p><img${ssrRenderAttr("src", _imports_0)} alt="inbox" data-v-60db455a><img${ssrRenderAttr("src", _imports_1)} alt="notification" data-v-60db455a><img${ssrRenderAttr("src", _imports_2)} alt="myProfile" data-v-60db455a></div><div class="mainContent container" data-v-60db455a><h1 data-v-60db455a>Update Patient Medical Record</h1><h5 data-v-60db455a>Click the tabs to view and edit patient medical details</h5><div class="patientRecord" data-v-60db455a>`);
      if (unref(investigationsArray).length > 0 && !unref(showLoading)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(investigationsArray), ({ id, title, investigations }) => {
          _push(`<div data-v-60db455a><h3 class="p-5" data-v-60db455a>${ssrInterpolate(title)}</h3><ul data-v-60db455a><!--[-->`);
          ssrRenderList(investigations, (investigation) => {
            _push(`<li data-v-60db455a>${ssrInterpolate(investigation.title)} - ${ssrInterpolate(investigation.id)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--> LOADING... <!--]-->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jjindex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jjindex = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60db455a"]]);

export { jjindex as default };
//# sourceMappingURL=jjindex-CK7DYTUV.mjs.map
