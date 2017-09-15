import Vue from 'vue';
import OriginToast from '../components/Toast';

const Toast = Vue.extend(OriginToast);

let instance,
    active = false,
    disabled = false;
let loadingCount = 0;

export default {
    show(message = '加载中') {
        loadingCount++;
        if(active) return;

        /* global document:true */
        if(!instance) {
            instance = new Toast({
                el: document.createElement('div'),
            });

            document.body.appendChild(instance.$el);
        }

        active = true;
        instance.message = message;
        instance.type = 'loading';
        instance.position = 'center';

        Vue.nextTick(() => {
            instance.show();
        });
    },
    hide() {
        loadingCount--;
        if(loadingCount > 0) return;
        if(loadingCount < 0) {
            loadingCount = 0;

            return;
        }
        instance.hide();
        active = false;
    },
    toggle(message) {
        return active ? this.hide() : this.show(message);
    },
    toggleDisabled() {
        disabled = !disabled;
    },
};
document.addEventListener('click', evt => {
    if(active || disabled) {
        evt.preventDefault();
        evt.stopPropagation();

        return false;
    }

    return true;
}, true);
