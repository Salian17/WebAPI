import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'; 

const fetchWeatherData = createAsyncThunk('weather/fetchWeatherData', () => {
    return interval(20000)
        .pipe(
            switchMap(() => fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=55.4422&lon=37.3636', {})),
            switchMap(response => response.json()),
            map(data => data.properties.timeseries.slice(0, 10)) 
        ).toPromise();
});

const weatherSlice = createSlice({
    name: 'weather',
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeatherData.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default weatherSlice.reducer;