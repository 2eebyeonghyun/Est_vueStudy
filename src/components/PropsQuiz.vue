<template>
    <div class="price-display">
        <p>원래 가격: {{ formatPrice(price) }}</p>
        <p>할인율: {{ discount }}%</p>
        <p>할인된 가격: {{ formatPrice(discountedPrice) }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            price: {
                type: Number,
                default: 1000,
                validator: (value) => value >= 0
            },
            discount: {
                type: Number,
                default: 0,
                validator: (value) => value >= 0 && value <= 100
            }
        },
        computed: {
            discountedPrice() {
                return this.price * (1 - this.discount / 100)
            }
        },
        methods: {
            formatPrice(value) {
                return `₩${value.toLocaleString()}`
            }
        }
    }
</script>

<style></style>