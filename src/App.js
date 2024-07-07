import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setcurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState(null);

  const handleOnClear = () => {
    setcurrentNumber("0");
    setFirstNumber("0");
    setOperation(null);
  };
  const handleAddNumber = (number) => {
    setcurrentNumber((prev) => {
      if (prev.includes(".")) {
        return prev + number;
      } else {
        return `${prev === "0" ? "" : prev}${number}`;
      }
    });
  };
  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setcurrentNumber("0");
      setOperation("+");
    } else {
      const result = Number(firstNumber) + Number(currentNumber);
      setcurrentNumber(String(result));
      setOperation("");
    }
  };
  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setcurrentNumber("0");
      setOperation("-");
    } else {
      const result = Number(firstNumber) - Number(currentNumber);
      setcurrentNumber(String(result));
      setOperation("");
    }
  };
  const handleMultiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setcurrentNumber("0");
      setOperation("x");
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setcurrentNumber(String(result));
      setOperation("");
    }
  };
  const handleDivisionNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setcurrentNumber("0");
      setOperation("/");
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setcurrentNumber(String(result));
      setOperation("");
    }
  };
  const handlePercentNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setcurrentNumber("0");
      setOperation("%");
    } else {
      const result = (Number(firstNumber) / 100) * Number(currentNumber);
      setcurrentNumber(result);
      setOperation("");
    }
  };
  const handleDeleteLastNumber = () => {
    setcurrentNumber((prev) => prev.slice(0, -1));
  };
  const handleAddDecimal = () => {
    if (!currentNumber.includes(".")) {
      setcurrentNumber((prev) => prev + ".");
    }
  };
  const handleNegateNumber = () => {
    setcurrentNumber((prev) => {
      if (prev === "0") {
        return prev;
      } else if (prev.startsWith("-")) {
        return prev.slice(1);
      } else {
        return `-${prev}`;
      }
    });
  };
  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== null && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "x":
          handleMultiplyNumbers();
          break;
        case "/":
          handleDivisionNumbers();
          break;
        case "%":
          handlePercentNumbers();
          break;
        default:
          break;
      }
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="%" onclick={handlePercentNumbers} />
          <Button label="/" onclick={handleDivisionNumbers} />
          <Button label="C" onclick={handleOnClear} />
          <Button label="&#8678;" onclick={handleDeleteLastNumber} />
        </Row>
        <Row>
          <Button label="7" onclick={() => handleAddNumber("7")} />
          <Button label="8" onclick={() => handleAddNumber("8")} />
          <Button label="9" onclick={() => handleAddNumber("9")} />
          <Button label="x" onclick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="4" onclick={() => handleAddNumber("4")} />
          <Button label="5" onclick={() => handleAddNumber("5")} />
          <Button label="6" onclick={() => handleAddNumber("6")} />
          <Button label="-" onclick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onclick={() => handleAddNumber("1")} />
          <Button label="2" onclick={() => handleAddNumber("2")} />
          <Button label="3" onclick={() => handleAddNumber("3")} />
          <Button label="+" onclick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="&#177;" onclick={handleNegateNumber} />
          <Button label="0" onclick={() => handleAddNumber("0")} />
          <Button label="," onclick={handleAddDecimal} />
          <Button label="=" onclick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
