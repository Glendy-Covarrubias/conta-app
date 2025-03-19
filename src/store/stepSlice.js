import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: [] };

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        steps: (state) => {
            state.data = [
                { icon: "FaPenNib", title: "PASO 1", text: 'Agrega tu FIEL' },
                { icon: "FaCoins", title: "PASO 2", text: 'Sincroniza tus cuentas bancarias' },
                { icon: "FaFileInvoiceDollar", title: "PASO 3", text: 'Recibe mensualmente tu declaración de impuestos' }
            ];
        },
    },
});

export const { steps } = stepSlice.actions;
export default stepSlice.reducer;