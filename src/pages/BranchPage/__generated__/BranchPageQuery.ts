/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BranchPageQuery
// ====================================================

export interface BranchPageQuery_node_AddedToProjectEvent {
  __typename: "AddedToProjectEvent" | "App" | "AssignedEvent" | "AutoMergeDisabledEvent" | "AutoMergeEnabledEvent" | "AutoRebaseEnabledEvent" | "AutoSquashEnabledEvent" | "AutomaticBaseChangeFailedEvent" | "AutomaticBaseChangeSucceededEvent" | "BaseRefChangedEvent" | "BaseRefDeletedEvent" | "BaseRefForcePushedEvent" | "Blob" | "Bot" | "BranchProtectionRule" | "CWE" | "CheckRun" | "CheckSuite" | "ClosedEvent" | "CodeOfConduct" | "CommentDeletedEvent" | "Commit" | "CommitComment" | "CommitCommentThread" | "ConnectedEvent" | "ConvertToDraftEvent" | "ConvertedNoteToIssueEvent" | "CrossReferencedEvent" | "DemilestonedEvent" | "DeployKey" | "DeployedEvent" | "Deployment" | "DeploymentEnvironmentChangedEvent" | "DeploymentProtectionRule" | "DeploymentReview" | "DeploymentStatus" | "DisconnectedEvent" | "Discussion" | "DiscussionCategory" | "DiscussionComment" | "Enterprise" | "EnterpriseAdministratorInvitation" | "EnterpriseIdentityProvider" | "EnterpriseRepositoryInfo" | "EnterpriseServerInstallation" | "EnterpriseServerUserAccount" | "EnterpriseServerUserAccountEmail" | "EnterpriseServerUserAccountsUpload" | "EnterpriseUserAccount" | "Environment" | "ExternalIdentity" | "Gist" | "GistComment" | "HeadRefDeletedEvent" | "HeadRefForcePushedEvent" | "HeadRefRestoredEvent" | "IpAllowListEntry" | "Issue" | "IssueComment" | "Label" | "LabeledEvent" | "Language" | "License" | "LockedEvent" | "Mannequin" | "MarkedAsDuplicateEvent" | "MarketplaceCategory" | "MarketplaceListing" | "MembersCanDeleteReposClearAuditEntry" | "MembersCanDeleteReposDisableAuditEntry" | "MembersCanDeleteReposEnableAuditEntry" | "MentionedEvent" | "MergedEvent" | "Milestone" | "MilestonedEvent" | "MovedColumnsInProjectEvent" | "OauthApplicationCreateAuditEntry" | "OrgAddBillingManagerAuditEntry" | "OrgAddMemberAuditEntry" | "OrgBlockUserAuditEntry" | "OrgConfigDisableCollaboratorsOnlyAuditEntry" | "OrgConfigEnableCollaboratorsOnlyAuditEntry" | "OrgCreateAuditEntry" | "OrgDisableOauthAppRestrictionsAuditEntry" | "OrgDisableSamlAuditEntry" | "OrgDisableTwoFactorRequirementAuditEntry" | "OrgEnableOauthAppRestrictionsAuditEntry" | "OrgEnableSamlAuditEntry" | "OrgEnableTwoFactorRequirementAuditEntry" | "OrgInviteMemberAuditEntry" | "OrgInviteToBusinessAuditEntry" | "OrgOauthAppAccessApprovedAuditEntry" | "OrgOauthAppAccessDeniedAuditEntry" | "OrgOauthAppAccessRequestedAuditEntry" | "OrgRemoveBillingManagerAuditEntry" | "OrgRemoveMemberAuditEntry" | "OrgRemoveOutsideCollaboratorAuditEntry" | "OrgRestoreMemberAuditEntry" | "OrgUnblockUserAuditEntry" | "OrgUpdateDefaultRepositoryPermissionAuditEntry" | "OrgUpdateMemberAuditEntry" | "OrgUpdateMemberRepositoryCreationPermissionAuditEntry" | "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry" | "Organization" | "OrganizationIdentityProvider" | "OrganizationInvitation" | "Package" | "PackageFile" | "PackageTag" | "PackageVersion" | "PinnedDiscussion" | "PinnedEvent" | "PinnedIssue" | "PrivateRepositoryForkingDisableAuditEntry" | "PrivateRepositoryForkingEnableAuditEntry" | "Project" | "ProjectCard" | "ProjectColumn" | "PublicKey" | "PullRequest" | "PullRequestCommit" | "PullRequestCommitCommentThread" | "PullRequestReview" | "PullRequestReviewComment" | "PullRequestReviewThread" | "Push" | "PushAllowance" | "Reaction" | "ReadyForReviewEvent" | "ReferencedEvent" | "Release" | "ReleaseAsset" | "RemovedFromProjectEvent" | "RenamedTitleEvent" | "ReopenedEvent" | "RepoAccessAuditEntry" | "RepoAddMemberAuditEntry" | "RepoAddTopicAuditEntry" | "RepoArchivedAuditEntry" | "RepoChangeMergeSettingAuditEntry" | "RepoConfigDisableAnonymousGitAccessAuditEntry" | "RepoConfigDisableCollaboratorsOnlyAuditEntry" | "RepoConfigDisableContributorsOnlyAuditEntry" | "RepoConfigDisableSockpuppetDisallowedAuditEntry" | "RepoConfigEnableAnonymousGitAccessAuditEntry" | "RepoConfigEnableCollaboratorsOnlyAuditEntry" | "RepoConfigEnableContributorsOnlyAuditEntry" | "RepoConfigEnableSockpuppetDisallowedAuditEntry" | "RepoConfigLockAnonymousGitAccessAuditEntry" | "RepoConfigUnlockAnonymousGitAccessAuditEntry" | "RepoCreateAuditEntry" | "RepoDestroyAuditEntry" | "RepoRemoveMemberAuditEntry" | "RepoRemoveTopicAuditEntry" | "Repository" | "RepositoryInvitation" | "RepositoryTopic" | "RepositoryVisibilityChangeDisableAuditEntry" | "RepositoryVisibilityChangeEnableAuditEntry" | "RepositoryVulnerabilityAlert" | "ReviewDismissalAllowance" | "ReviewDismissedEvent" | "ReviewRequest" | "ReviewRequestRemovedEvent" | "ReviewRequestedEvent" | "SavedReply" | "SecurityAdvisory" | "SponsorsActivity" | "SponsorsListing" | "SponsorsTier" | "Sponsorship" | "Status" | "StatusCheckRollup" | "StatusContext" | "SubscribedEvent" | "Tag" | "Team" | "TeamAddMemberAuditEntry" | "TeamAddRepositoryAuditEntry" | "TeamChangeParentTeamAuditEntry" | "TeamDiscussion" | "TeamDiscussionComment" | "TeamRemoveMemberAuditEntry" | "TeamRemoveRepositoryAuditEntry" | "Topic" | "TransferredEvent" | "Tree" | "UnassignedEvent" | "UnlabeledEvent" | "UnlockedEvent" | "UnmarkedAsDuplicateEvent" | "UnpinnedEvent" | "UnsubscribedEvent" | "User" | "UserBlockedEvent" | "UserContentEdit" | "UserStatus" | "VerifiableDomain" | "Workflow" | "WorkflowRun";
}

export interface BranchPageQuery_node_Ref_repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface BranchPageQuery_node_Ref_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The User owner of the repository.
   */
  owner: BranchPageQuery_node_Ref_repository_owner;
}

export interface BranchPageQuery_node_Ref_target_Blob {
  __typename: "Blob" | "Tag" | "Tree";
}

export interface BranchPageQuery_node_Ref_target_Commit_history_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface BranchPageQuery_node_Ref_target_Commit_history_edges_node_author {
  __typename: "GitActor";
  /**
   * The email in the Git commit.
   */
  email: string | null;
  /**
   * The name in the Git commit.
   */
  name: string | null;
}

export interface BranchPageQuery_node_Ref_target_Commit_history_edges_node {
  __typename: "Commit";
  /**
   * The datetime when this commit was committed.
   */
  committedDate: any;
  /**
   * Authorship details of the commit.
   */
  author: BranchPageQuery_node_Ref_target_Commit_history_edges_node_author | null;
  /**
   * The Git commit message
   */
  message: string;
}

export interface BranchPageQuery_node_Ref_target_Commit_history_edges {
  __typename: "CommitEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: BranchPageQuery_node_Ref_target_Commit_history_edges_node | null;
}

export interface BranchPageQuery_node_Ref_target_Commit_history {
  __typename: "CommitHistoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: BranchPageQuery_node_Ref_target_Commit_history_pageInfo;
  /**
   * A list of edges.
   */
  edges: (BranchPageQuery_node_Ref_target_Commit_history_edges | null)[] | null;
}

export interface BranchPageQuery_node_Ref_target_Commit {
  __typename: "Commit";
  /**
   * The linear commit history starting from (and including) this commit, in the same order as `git log`.
   */
  history: BranchPageQuery_node_Ref_target_Commit_history;
}

export type BranchPageQuery_node_Ref_target = BranchPageQuery_node_Ref_target_Blob | BranchPageQuery_node_Ref_target_Commit;

export interface BranchPageQuery_node_Ref {
  __typename: "Ref";
  id: string;
  /**
   * The ref name.
   */
  name: string;
  /**
   * The repository the ref belongs to.
   */
  repository: BranchPageQuery_node_Ref_repository;
  /**
   * The object the ref points to. Returns null when object does not exist.
   */
  target: BranchPageQuery_node_Ref_target | null;
}

export type BranchPageQuery_node = BranchPageQuery_node_AddedToProjectEvent | BranchPageQuery_node_Ref;

export interface BranchPageQuery {
  /**
   * Fetches an object given its ID.
   */
  node: BranchPageQuery_node | null;
}

export interface BranchPageQueryVariables {
  branchId: string;
  commitsCount: number;
  cursor?: string | null;
}
