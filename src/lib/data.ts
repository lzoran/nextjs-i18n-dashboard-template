import { User, Report, TeamMember, Activity } from "@/lib/definitions";

export async function getUser(): Promise<User> {
  return new Promise((resolve) => {
    const user = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    };

    setTimeout(() => resolve(user), 500);
  });
}

export async function getReports(): Promise<Report[]> {
  return new Promise((resolve) => {
    const reports: Report[] = [];

    setTimeout(() => resolve(reports), 500);
  });
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return new Promise((resolve) => {
    const teamMembers: TeamMember[] = [
      {
        firstName: "Dries",
        lastName: "Vincent",
        username: "@driesvincent",
        profileImage:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        firstName: "Lindsay",
        lastName: "Walton",
        username: "@lindsaywalton",
        profileImage:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        firstName: "Courtney",
        lastName: "Henry",
        username: "@courtneyhenry",
        profileImage:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        firstName: "Whitney",
        lastName: "Francis",
        username: "@whitneyfrancis",
        profileImage:
          "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        firstName: "Leonard",
        lastName: "Krasner",
        username: "@leonardkrasner",
        profileImage:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        firstName: "Floyd",
        lastName: "Miles",
        username: "@floydmiles",
        profileImage:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        firstName: "Emily",
        lastName: "Selman",
        username: "@emilyselman",
        profileImage:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ];

    setTimeout(() => resolve(teamMembers), 500);
  });
}

export async function getActivities(): Promise<Activity[]> {
  return new Promise((resolve) => {
    const activities: Activity[] = [
      {
        firstName: "Dries",
        lastName: "Vincent",
        action: "COMMENT",
        ts: 1717514696008,
      },
      {
        firstName: "Whitney",
        lastName: "Francis",
        action: "COMMENT",
        ts: 1717427841000,
      },
      {
        firstName: "Floyd",
        lastName: "Miles",
        action: "ACTIVATE",
        ts: 1717340641000,
      },
      {
        firstName: "Emily",
        lastName: "Selman",
        action: "STOP",
        ts: 1717253241000,
      },
    ];

    setTimeout(() => resolve(activities), 500);
  });
}
