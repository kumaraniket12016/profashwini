import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ProfessorProfile {
    bio: string;
    title: string;
    courses: Array<string>;
    name: string;
    education: Array<EducationEntry>;
    workExperience: Array<WorkExperienceEntry>;
    email: string;
    university: string;
    achievements: Array<string>;
    department: string;
    honors: Array<HonorEntry>;
}
export interface WorkExperienceEntry {
    year: bigint;
    description: string;
}
export interface HonorEntry {
    year: bigint;
    description: string;
}
export interface EducationEntry {
    year: bigint;
    description: string;
}
export interface backendInterface {
    addAchievement(achievement: string): Promise<void>;
    addCourse(course: string): Promise<void>;
    addEducation(year: bigint, description: string): Promise<void>;
    addHonor(year: bigint, description: string): Promise<void>;
    addWorkExperience(year: bigint, description: string): Promise<void>;
    createProfile(name: string, title: string, department: string, university: string, email: string, bio: string): Promise<void>;
    getAllProfiles(): Promise<Array<ProfessorProfile>>;
    getProfile(user: Principal): Promise<ProfessorProfile>;
    isProfileCreated(): Promise<boolean>;
    updateBio(bio: string): Promise<void>;
}
