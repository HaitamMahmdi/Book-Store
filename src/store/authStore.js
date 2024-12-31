import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
import { firebaseApp } from "../firebase";
export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null, // تخزين حالة المستخدم
    unsubscribe: null, // لحفظ المراقب
  }),
  getters: {
    userIsLogged(state) {
      return state.user !== null; // إرجاع حالة تسجيل الدخول بناءً على `user`
    },
  },
  actions: {
    monitorAuthState() {
      if (this.unsubscribe) {
        // إذا كان المراقب موجودًا بالفعل، لا تفعل شيئًا
        return;
      }

      // الاشتراك في حالة المصادقة
      this.unsubscribe = onAuthStateChanged(auth, (user) => {
        this.user = user; // تحديث حالة المستخدم
        console.log(`user is SingUp`, this.user);
      });
    },
    stopMonitoringAuthState() {
      if (this.unsubscribe) {
        this.unsubscribe(); // إلغاء الاشتراك في المراقب
        this.unsubscribe = null; // إعادة تعيين المراقب
      }
    },
  },
});
