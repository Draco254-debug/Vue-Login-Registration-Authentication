import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    namespaced: true,
    state() {
        return {
            name: 'Login Please',
            name2: 'Register Please',
        };
    },
    mutations,
    actions,
    getters,
};