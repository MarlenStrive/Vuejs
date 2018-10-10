export const SomeMixin = {
    filters: {
        lengthCountMixin(value) {
            return value + ' (' + value.length + ')';
        }
    }
}