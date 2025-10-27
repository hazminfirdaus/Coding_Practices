function passwordStrength(password) {
  let rulesMet = 0;

  // Rule A: length >= 8
  if (password.length >= 8) {
    rulesMet++;
  }

  // Rule B: both uppercase and lowercase
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  if (hasUpper && hasLower) {
    rulesMet++;
  }

  // Rule C: at least one digit
  if (/\d/.test(password)) {
    rulesMet++;
  }

  // Rule D: special character from the set !@#$%^&*
  if (/[!@#$%^&*]/.test(password)) {
    rulesMet++;

  }

  // Decide strength
  if (rulesMet === 4) {
    return password + " is strong";
  } else if (rulesMet >= 2) {
    return password + " is medium";
  } else {
    return password + " is weak";
  }
}

console.log(passwordStrength("P@ssw0rd Str3ngth!"));
console.log(passwordStrength("Medium1"));
console.log(passwordStrength("weakpass"));

// Optional: Verbose version returning which rules were met
// function passwordStrengthVerbose(password) {
//   const result = {
//     length: password.length >= 8,
//     case: /[A-Z]/.test(password) && /[a-z]/.test(password),
//     digit: /\d/.test(password),
//     special: /[!@#$%^&*]/.test(password)
//   };

//   const rulesMet = Object.values(result).filter(Boolean).length;

//   let strength;
//   if (rulesMet === 4) {
//     strength = "strong";
//   } else if (rulesMet >= 2) {
//     strength = "medium";
//   } else {
//     strength = "weak";
//   }

//   return { strength, rules: result };
// }