export const pathKeys = {
  unathorized: {
    HOME: '/',
    SIGN_UP: '/sign-up',
  },
  password: {
    FORGOT_PASSWORD: '/forgot-password',
    SET_NEW_PASSWORD: '/set-password',
  },
  email: {
    CONFIRM_EMAIL: '/confirm',
  },
  user: {
    DASHBOARD: '/dashboard',
  },
  teacher: {
    DASHBOARD: '/dashboard',
    CREATE_LESSON: '/create',
  },
  relative: {
    CLASSROOM: '/classroom/:id',
  },
  tabs: {
    DASHBOARD_STUDENT_TABS: {
      CLASSROOM: '/dashboard/classroom',
      HOMEWORK: '/dashboard/homework',
      PAYMENT: '/dashboard/payment',
    },
    DASHBOARD_TEACHER_TABS: {
      USER: '/dashboard/user',
      LESSON: '/dashboard/lesson',
      CLASSROOM: '/dashboard/classroom',
    },
    CREATE_TABS: {
      IMAGE: '/create/image',
      CONTENT: '/create/content',
      LESSON: '/create/lesson',
    },
  },
};
