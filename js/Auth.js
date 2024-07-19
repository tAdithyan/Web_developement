var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Login Form
var loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
        var emailInput, passwordInput, email_1, password_1, response, data, userExists, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    emailInput = document.getElementById('email');
                    passwordInput = document.getElementById('password');
                    if (!(emailInput && passwordInput)) return [3 /*break*/, 5];
                    email_1 = emailInput.value;
                    password_1 = passwordInput.value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('http://localhost:8000/users')];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log(data);
                    userExists = data.some(function (user) { return user.email === email_1 && user.password === password_1; });
                    if (userExists) {
                        localStorage.setItem('email', email_1);
                        window.location.href = '/Html/HomePage.html';
                    }
                    else {
                        console.log('Email does not exist in API.');
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error fetching data:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); });
}
// registration
document.addEventListener('DOMContentLoaded', function () {
    var registerForm = document.getElementById('RegisterForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
            var registerEmailInput, registerPasswordInput, retypePasswordInput, registerEmail, registerPassword, retypePassword, errorTxt, checkEmailResponse, existingUsers, errorTxt, registerResponse, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        registerEmailInput = document.getElementById('registerEmail');
                        registerPasswordInput = document.getElementById('registerPassword');
                        retypePasswordInput = document.getElementById('retype_password');
                        if (!(registerEmailInput && registerPasswordInput && retypePasswordInput)) return [3 /*break*/, 6];
                        registerEmail = registerEmailInput.value;
                        registerPassword = registerPasswordInput.value;
                        retypePassword = retypePasswordInput.value;
                        if (registerPassword !== retypePassword) {
                            errorTxt = document.getElementById('errorTxt');
                            if (errorTxt) {
                                errorTxt.textContent = 'Passwords do not match';
                            }
                            else {
                                console.log('Cannot find errorTxt element');
                            }
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, fetch("http://localhost:8000/users?email=".concat(registerEmail))];
                    case 2:
                        checkEmailResponse = _a.sent();
                        if (!checkEmailResponse.ok) {
                            throw new Error('Error checking email availability');
                        }
                        return [4 /*yield*/, checkEmailResponse.json()];
                    case 3:
                        existingUsers = _a.sent();
                        if (existingUsers.length > 0) {
                            errorTxt = document.getElementById('errorTxt');
                            if (errorTxt) {
                                errorTxt.textContent = 'Email already registered';
                            }
                            else {
                                console.log('Cannot find errorTxt element');
                            }
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, fetch('http://localhost:8000/users', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    email: registerEmail,
                                    password: registerPassword,
                                }),
                            })];
                    case 4:
                        registerResponse = _a.sent();
                        if (!registerResponse.ok) {
                            throw new Error('Registration failed');
                        }
                        window.location.href = '/Html/Login.html';
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        console.error('Error registering user:', error_2);
                        alert('Registration failed');
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    }
});
