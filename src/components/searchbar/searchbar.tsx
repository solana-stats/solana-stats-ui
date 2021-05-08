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

function GetSignatureInformation(input: string): SignatureInformation {

  const search = input.trim();

  if (!isNaN(Number(search))) {
    return {
      signatureType: SIGNATURE_TYPE.BLOCK,
      signature: search,
      label: `Slot #${search}`,
      value: search,
      path: `/block/${search}`
    }
  }

  let programInfo = getProgramInfo(search);

  if (programInfo.signatureType !== undefined) {
    return programInfo;
  }

  let tokenInfo = getTokenInfo(search);

  if (tokenInfo.signatureType !== undefined) {
    return tokenInfo;
  }

  try {
    const decodedSearch = bs58.decode(search);

    if (decodedSearch.length === 32) {
      return {
        signatureType: SIGNATURE_TYPE.ACCOUNT,
        signature: search,
        label: `Account ${search}`,
        value: search,
        path: `/account/${search}`
      }
    } else if (decodedSearch.length === 64) {
      return {
        signatureType: SIGNATURE_TYPE.TRANSACTION,
        signature: search,
        label: `Transaction ${search}`,
        value: search,
        path: `/transaction/${search}`
      }
    }
  } catch (e) {}
  return {
    path: "/"
  };
}

function getTokenInfo(search: string): SignatureInformation {
  const token = Array.from(tokenRegistry.entries()).filter(
    ([address, details]) => {
      const searchLower = search.toLowerCase();
      return (
        details.name.toLowerCase().includes(searchLower) ||
        details.symbol.toLowerCase().includes(searchLower) ||
        address.includes(search)
      );
    }
  );

  if (token.length > 0) {
    return {
      signatureType: SIGNATURE_TYPE.TOKEN,
      signature: search,
      label: `Transaction ${search}`,
      value: search,
      path: "/address/"
    }
  }
  return {
    path: "/"
  };
}

function getProgramInfo(search: string): SignatureInformation {

  return {
    path: "/"
  };
}