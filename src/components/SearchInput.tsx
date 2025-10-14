import React, { useState } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

interface SearchInputProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    onSearch(inputValue.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setInputValue("");
    onSearch("");
  };

  return (
    <Flex m="6" gap="4" align="center">
      <Input
        placeholder={placeholder || "Search..."}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        bg="white"
      />
      <Button onClick={handleSearch} variant="solid" colorScheme="blue">
        Search
      </Button>
      <Button onClick={handleClear} disabled={!inputValue} variant="outline">
        Clear
      </Button>
    </Flex>
  );
};

export default SearchInput;
