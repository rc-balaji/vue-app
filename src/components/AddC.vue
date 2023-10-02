
<template>
    <div>
        <h1>Add Two Numbers</h1>
        <div>
            <label for="number1">Number 1:</label>
            <input type="number" id="number1" v-model="number1" />
        </div>
        <div>
            <label for="number2">Number 2:</label>
            <input type="number" id="number2" v-model="number2" />
        </div>
        <button @click="addNumbers">Add</button>
        <div>
            <strong>Result:</strong> {{ result }}
        </div>
    </div>
</template>

<script>
export default {
    name: "AddC",
    data() {
        return {
            number1: 0,
            number2: 0,
            result: 0,
        };
    },
    methods: {
        addNumbers() {
            this.result = this.number1 + this.number2;
        },
    },
};
</script>

<style scoped>
/* Add your CSS styles here if needed */
</style>
