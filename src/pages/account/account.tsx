import React from 'react';
import {useParams} from "react-router";

interface accountProps {
  address?: string
}

export default function Account() {

  let props: accountProps = useParams();

  return (
    <div>
      Account Page for {props.address}
    </div>
  );

}