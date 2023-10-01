import { CountryListService } from "../service/CountryListService";
import { setCountryListData, setCountryListError, setCountryListLoading } from "../slice/CountryListSlice";

const CountryListAsync = (search,page) => async (dispatch) => {
  try {
    dispatch(setCountryListLoading());

    const response = await CountryListService.getCountryList(search,page);
    if (response) {
        dispatch(setCountryListData(response));
        dispatch(setCountryListError(""));
    }
  } catch (error) {
    dispatch(setCountryListError(error));
  }
};

export const CountryListAction = {
  CountryListAsync,
};
