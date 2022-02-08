import vTableResizable from './tableResizable';

const install = function(Vue) {
  Vue.directive('clickout', vTableResizable);
};

if (window.Vue) {
  Vue.use(install);
}

vTableResizable.install = install;

export default vTableResizable;
