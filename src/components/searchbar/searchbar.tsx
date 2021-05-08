import React, {FormEvent, useState} from 'react';
import bs58 from 'bs58';
import TextField from "@material-ui/core/TextField";
import {useHistory} from "react-router";
import {SIGNATURE_TYPE, SignatureInformation} from "../../utils/search.model";

export default function Searchbar() {

  const history = useHistory();
  const [address, setAddress] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    history.push(`/address/${address}`);
  }

  return (
    <TextField value={address}
               onInput={e => {setAddress((e.target as HTMLTextAreaElement).value)}}
               label="Enter Solana Address"
               type="search"
               variant="outlined" />
  );
}