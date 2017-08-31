import Vue from 'vue';
import OriginAlert from '../components/Alert';

const Alert = Vue.extend(OriginAlert);
let alertInstance;

// Alert框
export const alert = (option, onShow) => {
    option.title = option.title || '提示';

    alertInstance = new Alert({
        el: document.createElement('div'),
    });

    document.body.appendChild(alertInstance.$el);

    Object.assign(alertInstance, option);

    Vue.nextTick(() => {
        alertInstance.show();
        onShow && onShow(alertInstance);
    });

    return alertInstance;
};

alert.hide = () => {
    alertInstance.hide();
};
