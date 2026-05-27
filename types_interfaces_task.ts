// ── 1. Arrays ──────────────────────────────
const browsers: string[] = ["chromium", "firefox", "webkit"];
const scores: number[] = [90, 85, 78];
scores.push(100);         // ✅ const allows push
scores[0] = 95;           // ✅ const allows change
// scores = [];           // ❌ const blocks reassign
console.log("browsers:", browsers);
console.log("scores:", scores);

// ── 2. Tuple — const ───────────────────────
const userInfo: [string, number] = ["don", 25];
userInfo[1] = 26;         // ✅ value change allowed
// userInfo[2] = 100;     // ❌ wrong length
// userInfo[1] = "hello"; // ❌ wrong type
console.log("userInfo:", userInfo);

// ── 2b. Tuple — let ────────────────────────
let session: [string, boolean] = ["abc123", true];
session = ["xyz999", false];  // ✅ reassign allowed with let
console.log("session:", session);

// ── 3. Union type ──────────────────────────
let userId: string | number;
userId = "USR001";        // ✅
userId = 101;             // ✅
// userId = true;         // ❌ boolean not in union
console.log("userId:", userId);

// ── 4. Type alias ──────────────────────────
type TestStatus = "pass" | "fail" | "skip";
const result: TestStatus = "pass";
// const result2: TestStatus = "passed"; // ❌ not in alias
console.log("result:", result);

type Browser = "chromium" | "firefox" | "webkit";
const myBrowser: Browser = "chromium";   // ✅
console.log("browser:", myBrowser);

// ── 5. Interface ───────────────────────────
interface LoginCredentials {
  readonly id: number;      // cannot change
  username: string;
  password: string;
  rememberMe?: boolean;     // optional
}

const credentials: LoginCredentials = {
  id: 1,
  username: "standard_user",
  password: "secret_sauce",
  // rememberMe skipped ✅
};
// credentials.id = 5;  // ❌ readonly error
console.log("credentials:", credentials);

// ── 6. Interface Extending ─────────────────
interface AdminCredentials extends LoginCredentials {
  adminKey: string;
}

const admin: AdminCredentials = {
  id: 2,                    // from LoginCredentials
  username: "admin",        // from LoginCredentials
  password: "admin123",     // from LoginCredentials
  adminKey: "KEY999",       // own field
};
console.log("admin:", admin);

// ── 7. Type extending with & ───────────────
type AdminType = LoginCredentials & {
  adminKey: string;
};

const admin2: AdminType = {
  id: 3,
  username: "admin2",
  password: "admin456",
  adminKey: "KEY888",
};
console.log("admin2:", admin2);

// ── 8. enum ────────────────────────────────
enum BrowserType {
  Chromium = "chromium",
  Firefox = "firefox",
  Webkit = "webkit"
}
const testBrowser: BrowserType = BrowserType.Chromium;
console.log("testBrowser:", testBrowser);

// ── 9. Uncomment to see errors ─────────────
// credentials.id = 5;          // ❌ readonly
// const r: TestStatus = "passed"; // ❌ not in alias
// myBrowser = "safari";        // ❌ not in Browser type