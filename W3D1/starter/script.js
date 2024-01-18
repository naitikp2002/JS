'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2024-01-14T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc) {
  containerMovements.insertAdjacentElement = '';
  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // const current = new Date();
    const date = new Date(acc.movementsDates[i]);
    const day = date.getDate();
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    let str = `${day}/${month}/${year}`;
    function calDaysPassed(date1, date2) {
      const passedDays = Math.round(
        Math.abs((date2 - date1) / (1000 * 60 * 60 * 24))
      );
      if (passedDays === 0) {
        return `Today`;
      } else if (passedDays === 1) {
        return `Yesterday`;
      } else if (passedDays <= 7) {
        return `${passedDays} Days ago`;
      } else {
        return str;
      }
    }
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}
    </div> 
    <div class="movements__date">${calDaysPassed(date, new Date())}</div>
        <div class="movements__value">${mov.toFixed(2)}</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1);

function updateUI(currentAccount) {
  displayMovements(currentAccount);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc1, mov) => {
    return acc1 + mov;
  }, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
  console.log(acc.balance);
};
// calcDisplayBalance(account1.movements);
// const user = 'Steven Thomas Williams';
// console.log(user);

const calcDisplaySummary = account => {
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce(function (acc, mov) {
      return acc + mov;
    });
  // console.log(income);
  const outcome = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = income;
  labelSumOut.textContent = Math.abs(outcome);

  const interest = account.movements
    .filter(mov => mov > 0)
    .map((mov, i) => (mov * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = interest;
};
// calcDisplaySummary(account1.movements);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .split(' ')
      .map(function (ele, i) {
        return ele[0].toLocaleLowerCase();
      })
      .join('');
    // console.log(acc.username);
  });
};
createUsername(accounts);
let currentAccount;

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('LOGIN');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    const current = new Date();
    const date = current.getDate();
    const month = `${current.getMonth() + 1}`.padStart(2, 0);
    const year = current.getFullYear();
    const hr = `${current.getHours()}`.padStart(2, 0);
    const min = `${current.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${date}/${month}/${year}, ${hr}:${min}`;
    displayMovements(currentAccount);
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount, recieverAcc);
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    console.log('Transfer Valid');
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
  }
});
// console.log();

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map(function (mov) {
  return mov * 1.1;
});

// console.log(movements);
// console.log(movementsUSD);
/////////////////////////////////////////////////

setTimeout(() => {
  console.log('Hello, Welcome to the JS Udemy Course');
}, 3000);

console.log('Waiting...');
