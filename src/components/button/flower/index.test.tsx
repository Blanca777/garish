import React from "react";
import { render, screen } from '@testing-library/react';
import Button from "..";

it("button component test", () => {
  render(<Button>123</Button>);
  expect(screen.getByText('Default-123')).toBeInTheDocument();
});
