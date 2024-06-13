"use client";

import { FormEvent } from "react";
import { Button, TextInput } from "@mantine/core";

import Container from "@techsiro/components/container";

export default function Create() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <Container>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <TextInput
          label="Campaign Name"
          placeholder="Enter your campaign name"
          name="campaign_name"
          id="campaign_name"
        />
        <Button variant="filled" className="w-fit" type="submit">
          Create Campaign
        </Button>
      </form>
    </Container>
  );
}
