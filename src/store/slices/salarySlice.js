import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for saving salary data
export const saveSalaryData = createAsyncThunk(
  'salary/saveSalaryData',
  async (formData) => {
    const response = await fetch('/api/store_salary_income', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response.json();
  }
);

const initialState = {
  salaryTabs: [{
    employerName: 'Employer 1',
    empType: '',
    tanNumber: '',
    tds: '',
    address: '',
    pincode: '',
    stateCode: '',
    city: '',
  }],
  activeTabIndex: 0,
  loading: false,
  error: null,
  underlinePosition: {
    width: 0,
    left: 0
  }
};

const salarySlice = createSlice({
  name: 'salary',
  initialState,
  reducers: {
    addSalaryTab: (state) => {
      state.salaryTabs.push({
        employerName: `Employer ${state.salaryTabs.length + 1}`,
        empType: '',
        tanNumber: '',
        tds: '',
        address: '',
        pincode: '',
        stateCode: '',
        city: '',
      });
      state.activeTabIndex = state.salaryTabs.length - 1;
    },
    removeSalaryTab: (state, action) => {
      if (state.salaryTabs.length > 1) {
        state.salaryTabs = state.salaryTabs.filter((_, i) => i !== action.payload);
        state.activeTabIndex = Math.max(0, state.activeTabIndex - 1);
      } else {
        state.salaryTabs[0] = initialState.salaryTabs[0];
      }
    },
    updateSalaryTab: (state, action) => {
      const { index, field, value } = action.payload;
      state.salaryTabs[index][field] = value;
    },
    setActiveTab: (state, action) => {
      state.activeTabIndex = action.payload;
    },
    updateUnderlinePosition: (state, action) => {
      state.underlinePosition = {
        width: action.payload.width,
        left: action.payload.left
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveSalaryData.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveSalaryData.fulfilled, (state, action) => {
        state.loading = false;
        // Handle success response
      })
      .addCase(saveSalaryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { 
  addSalaryTab, 
  removeSalaryTab, 
  updateSalaryTab, 
  setActiveTab,
  updateUnderlinePosition 
} = salarySlice.actions;

export default salarySlice.reducer;
