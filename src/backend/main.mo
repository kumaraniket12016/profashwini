import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type ProfessorProfile = {
    name : Text;
    title : Text;
    department : Text;
    university : Text;
    email : Text;
    bio : Text;
    education : [EducationEntry];
    workExperience : [WorkExperienceEntry];
    honors : [HonorEntry];
    achievements : [Text];
    courses : [Text];
  };

  type EducationEntry = {
    year : Nat;
    description : Text;
  };

  type WorkExperienceEntry = {
    year : Nat;
    description : Text;
  };

  type HonorEntry = {
    year : Nat;
    description : Text;
  };

  module ProfessorProfile {
    public func compare(profile1 : ProfessorProfile, profile2 : ProfessorProfile) : Order.Order {
      profile1.email.compare(profile2.email);
    };
  };

  let profiles = Map.empty<Principal, ProfessorProfile>();

  public shared ({ caller }) func createProfile(name : Text, title : Text, department : Text, university : Text, email : Text, bio : Text) : async () {
    if (profiles.containsKey(caller)) { Runtime.trap("This profile already exists.") };
    let profile : ProfessorProfile = {
      name;
      title;
      department;
      university;
      email;
      bio;
      education = [];
      workExperience = [];
      honors = [];
      achievements = [];
      courses = [];
    };
    profiles.add(caller, profile);
  };

  public shared ({ caller }) func updateBio(bio : Text) : async () {
    switch (profiles.get(caller)) {
      case (null) { Runtime.trap("Profile does not exist. ") };
      case (?profile) {
        let newProfile : ProfessorProfile = {
          name = profile.name;
          title = profile.title;
          department = profile.department;
          university = profile.university;
          email = profile.email;
          bio;
          education = profile.education;
          workExperience = profile.workExperience;
          honors = profile.honors;
          achievements = profile.achievements;
          courses = profile.courses;
        };
        profiles.add(caller, newProfile);
      };
    };
  };

  public shared ({ caller }) func addEducation(year : Nat, description : Text) : async () {
    switch (profiles.get(caller)) {
      case (null) { Runtime.trap("Profile does not exist. ") };
      case (?profile) {
        let newEducation : EducationEntry = { year; description };
        let newProfile : ProfessorProfile = {
          profile with
          education = profile.education.concat([newEducation]);
        };
        profiles.add(caller, newProfile);
      };
    };
  };

  public shared ({ caller }) func addWorkExperience(year : Nat, description : Text) : async () {
    switch (profiles.get(caller)) {
      case (null) { Runtime.trap("Profile does not exist. ") };
      case (?profile) {
        let newWorkExperience : WorkExperienceEntry = { year; description };
        let newProfile : ProfessorProfile = {
          profile with
          workExperience = profile.workExperience.concat([newWorkExperience]);
        };
        profiles.add(caller, newProfile);
      };
    };
  };

  public shared ({ caller }) func addHonor(year : Nat, description : Text) : async () {
    switch (profiles.get(caller)) {
      case (null) { Runtime.trap("Profile does not exist. ") };
      case (?profile) {
        let newHonor : HonorEntry = { year; description };
        let newProfile : ProfessorProfile = {
          profile with
          honors = profile.honors.concat([newHonor]);
        };
        profiles.add(caller, newProfile);
      };
    };
  };

  public shared ({ caller }) func addAchievement(achievement : Text) : async () {
    switch (profiles.get(caller)) {
      case (null) { Runtime.trap("Profile does not exist. ") };
      case (?profile) {
        let newProfile : ProfessorProfile = {
          profile with
          achievements = profile.achievements.concat([achievement]);
        };
        profiles.add(caller, newProfile);
      };
    };
  };

  public shared ({ caller }) func addCourse(course : Text) : async () {
    switch (profiles.get(caller)) {
      case (null) { Runtime.trap("Profile does not exist. ") };
      case (?profile) {
        let newProfile : ProfessorProfile = {
          profile with
          courses = profile.courses.concat([course]);
        };
        profiles.add(caller, newProfile);
      };
    };
  };

  public query ({ caller }) func isProfileCreated() : async Bool {
    profiles.containsKey(caller);
  };

  public query func getProfile(user : Principal) : async ProfessorProfile {
    switch (profiles.get(user)) {
      case (null) { Runtime.trap("Profile does not exist. ") };
      case (?profile) { profile };
    };
  };

  public query func getAllProfiles() : async [ProfessorProfile] {
    profiles.values().toArray().sort();
  };
};
