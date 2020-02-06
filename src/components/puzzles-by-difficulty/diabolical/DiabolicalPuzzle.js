import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetDiabolicalPuzzle = () => {

        return axios
          .get("https://omega2020.herokuapp.com/puzzle/diabolical")
          .then(res => {
            return res.data;
          })
          .catch(err => console.log(err.response));
};
