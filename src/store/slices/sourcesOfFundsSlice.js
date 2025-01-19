import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  proprietorsCapital: 0,
  revaluationReserve: 0,
  capitalReserve: 0,
  statutoryReserve: 0,
  anyOtherReserve: 0,
  totalReserves: 0,
  totalProprietorsFund: 0,
  foreignCurrencyLoans: 0,
  rupeeLoansFromBanks: 0,
  rupeeLoansFromOthers: 0,
  totalRupeeLoans: 0,
  totalSecuredLoans: 0,
  unsecuredLoansFromBanks: 0,
  unsecuredLoansFromOthers: 0,
  totalUnsecuredLoans: 0,
  totalLoanFunds: 0,
  deferredTaxLiability: 0,
  advancesFromPersons: 0,
  advancesFromOthers: 0,
  totalAdvances: 0,
  totalSourcesOfFunds: 0
};

const sourcesOfFundsSlice = createSlice({
  name: 'sourcesOfFunds',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = Number(value);

      // Calculate totals
      state.totalReserves = state.revaluationReserve + state.capitalReserve + 
                           state.statutoryReserve + state.anyOtherReserve;

      state.totalProprietorsFund = state.proprietorsCapital + state.totalReserves;

      state.totalRupeeLoans = state.rupeeLoansFromBanks + state.rupeeLoansFromOthers;

      state.totalSecuredLoans = state.foreignCurrencyLoans + state.totalRupeeLoans;

      state.totalUnsecuredLoans = state.unsecuredLoansFromBanks + state.unsecuredLoansFromOthers;

      state.totalLoanFunds = state.totalSecuredLoans + state.totalUnsecuredLoans;

      state.totalAdvances = state.advancesFromPersons + state.advancesFromOthers;

      state.totalSourcesOfFunds = state.totalProprietorsFund + state.totalLoanFunds + 
                                 state.deferredTaxLiability + state.totalAdvances;
    }
  }
});

export const { updateField } = sourcesOfFundsSlice.actions;
export default sourcesOfFundsSlice.reducer;
