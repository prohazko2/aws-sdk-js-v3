import { BooleanOperator, EdgeOutputConfig, UserSettings } from "./models_0";
import {
  DeploymentConfig,
  MemberDefinition,
  ModelApprovalStatus,
  MonitoringScheduleConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  NotificationConfiguration,
  OidcConfig,
  ProfilerRuleConfiguration,
  RootAccess,
  SourceIpConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  _InstanceType,
} from "./models_1";
import {
  DesiredWeightAndCapacity,
  Device,
  Filter,
  GitConfigForUpdate,
  NestedFilters,
  ProfilerConfigForUpdate,
  ResourceType,
  SearchSortOrder,
  Workforce,
  Workteam,
} from "./models_2";

export interface UpdateArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to update.</p>
   */
  ArtifactArn: string | undefined;

  /**
   * <p>The new name for the artifact.</p>
   */
  ArtifactName?: string;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: { [key: string]: string };

  /**
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

export namespace UpdateArtifactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateArtifactRequest): any => ({
    ...obj,
  });
}

export interface UpdateArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;
}

export namespace UpdateArtifactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateArtifactResponse): any => ({
    ...obj,
  });
}

export interface UpdateCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to update.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The configuration of the git repository, including the URL and the Amazon Resource
   *             Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to
   *             access the repository. The secret must have a staging label of <code>AWSCURRENT</code>
   *             and must be in the following format:</p>
   *         <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *         </p>
   */
  GitConfig?: GitConfigForUpdate;
}

export namespace UpdateCodeRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCodeRepositoryInput): any => ({
    ...obj,
  });
}

export interface UpdateCodeRepositoryOutput {
  /**
   * <p>The ARN of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;
}

export namespace UpdateCodeRepositoryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCodeRepositoryOutput): any => ({
    ...obj,
  });
}

export interface UpdateContextRequest {
  /**
   * <p>The name of the context to update.</p>
   */
  ContextName: string | undefined;

  /**
   * <p>The new description for the context.</p>
   */
  Description?: string;

  /**
   * <p>The new list of properties. Overwrites the current property list.</p>
   */
  Properties?: { [key: string]: string };

  /**
   * <p>A list of properties to remove.</p>
   */
  PropertiesToRemove?: string[];
}

export namespace UpdateContextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContextRequest): any => ({
    ...obj,
  });
}

export interface UpdateContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;
}

export namespace UpdateContextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContextResponse): any => ({
    ...obj,
  });
}

export interface UpdateDeviceFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  RoleArn?: string;

  /**
   * <p>Description of the fleet.</p>
   */
  Description?: string;

  /**
   * <p>Output configuration  for storing sample data collected by the fleet.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>Whether to create an Amazon Web Services IoT Role Alias during device fleet creation.
   *       The name of the role alias generated will match this pattern:
   *       "SageMakerEdge-{DeviceFleetName}".</p>
   *          <p>For example, if your device fleet is called "demo-fleet", the name of
   *       the role alias will be "SageMakerEdge-demo-fleet".</p>
   */
  EnableIotRoleAlias?: boolean;
}

export namespace UpdateDeviceFleetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDeviceFleetRequest): any => ({
    ...obj,
  });
}

export interface UpdateDevicesRequest {
  /**
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>List of devices to register with Edge Manager agent.</p>
   */
  Devices: Device[] | undefined;
}

export namespace UpdateDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDevicesRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainRequest {
  /**
   * <p>The ID of the domain to be updated.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>A collection of settings.</p>
   */
  DefaultUserSettings?: UserSettings;
}

export namespace UpdateDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   */
  DomainArn?: string;
}

export namespace UpdateDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDomainResponse): any => ({
    ...obj,
  });
}

export enum VariantPropertyType {
  DataCaptureConfig = "DataCaptureConfig",
  DesiredInstanceCount = "DesiredInstanceCount",
  DesiredWeight = "DesiredWeight",
}

/**
 * <p>Specifies a production variant property type for an Endpoint.</p>
 *         <p>If you are updating an endpoint with the <a>UpdateEndpointInput$RetainAllVariantProperties</a> option set to
 *                 <code>true</code>, the <code>VariantProperty</code> objects listed in <a>UpdateEndpointInput$ExcludeRetainedVariantProperties</a> override the
 *             existing variant properties of the endpoint.</p>
 */
export interface VariantProperty {
  /**
   * <p>The type of variant property. The supported values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DesiredInstanceCount</code>: Overrides the existing variant instance
   *                     counts using the <a>ProductionVariant$InitialInstanceCount</a> values
   *                     in the <a>CreateEndpointConfigInput$ProductionVariants</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DesiredWeight</code>: Overrides the existing variant weights using the
   *                         <a>ProductionVariant$InitialVariantWeight</a> values in the <a>CreateEndpointConfigInput$ProductionVariants</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DataCaptureConfig</code>: (Not currently supported.)</p>
   *             </li>
   *          </ul>
   */
  VariantPropertyType: VariantPropertyType | string | undefined;
}

export namespace VariantProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariantProperty): any => ({
    ...obj,
  });
}

export interface UpdateEndpointInput {
  /**
   * <p>The name of the endpoint whose configuration you want to update.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the new endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>When updating endpoint resources, enables or disables the retention of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VariantProperty.html">variant properties</a>, such as the instance count or the variant weight. To
   *             retain the variant properties of an endpoint when updating it, set
   *                 <code>RetainAllVariantProperties</code> to <code>true</code>. To use the variant
   *             properties specified in a new <code>EndpointConfig</code> call when updating an
   *             endpoint, set <code>RetainAllVariantProperties</code> to <code>false</code>. The default
   *             is <code>false</code>.</p>
   */
  RetainAllVariantProperties?: boolean;

  /**
   * <p>When you are updating endpoint resources with <a>UpdateEndpointInput$RetainAllVariantProperties</a>, whose value is set to
   *                 <code>true</code>, <code>ExcludeRetainedVariantProperties</code> specifies the list
   *             of type <a>VariantProperty</a> to override with the values provided by
   *                 <code>EndpointConfig</code>. If you don't specify a value for
   *                 <code>ExcludeAllVariantProperties</code>, no variant properties are overridden.
   *         </p>
   */
  ExcludeRetainedVariantProperties?: VariantProperty[];

  /**
   * <p>The deployment configuration for the endpoint to be updated.</p>
   */
  DeploymentConfig?: DeploymentConfig;
}

export namespace UpdateEndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointInput): any => ({
    ...obj,
  });
}

export interface UpdateEndpointOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace UpdateEndpointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointOutput): any => ({
    ...obj,
  });
}

export interface UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * <p>The name of an existing Amazon SageMaker endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>An object that provides new capacity and weight values for a variant.</p>
   */
  DesiredWeightsAndCapacities: DesiredWeightAndCapacity[] | undefined;
}

export namespace UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointWeightsAndCapacitiesInput): any => ({
    ...obj,
  });
}

export interface UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointWeightsAndCapacitiesOutput): any => ({
    ...obj,
  });
}

export interface UpdateExperimentRequest {
  /**
   * <p>The name of the experiment to update.</p>
   */
  ExperimentName: string | undefined;

  /**
   * <p>The name of the experiment as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;
}

export namespace UpdateExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentRequest): any => ({
    ...obj,
  });
}

export interface UpdateExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

export namespace UpdateExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentResponse): any => ({
    ...obj,
  });
}

export interface UpdateImageRequest {
  /**
   * <p>A list of properties to delete. Only the <code>Description</code> and
   *         <code>DisplayName</code> properties can be deleted.</p>
   */
  DeleteProperties?: string[];

  /**
   * <p>The new description for the image.</p>
   */
  Description?: string;

  /**
   * <p>The new display name for the image.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the image to update.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The new Amazon Resource Name (ARN) for the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

export namespace UpdateImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImageRequest): any => ({
    ...obj,
  });
}

export interface UpdateImageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  ImageArn?: string;
}

export namespace UpdateImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImageResponse): any => ({
    ...obj,
  });
}

export interface UpdateModelPackageInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>The approval status of the model.</p>
   */
  ModelApprovalStatus: ModelApprovalStatus | string | undefined;

  /**
   * <p>A description for the approval status of the model.</p>
   */
  ApprovalDescription?: string;
}

export namespace UpdateModelPackageInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelPackageInput): any => ({
    ...obj,
  });
}

export interface UpdateModelPackageOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelPackageArn: string | undefined;
}

export namespace UpdateModelPackageOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateModelPackageOutput): any => ({
    ...obj,
  });
}

export interface UpdateMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within
   *          an Amazon Web Services account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;
}

export namespace UpdateMonitoringScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMonitoringScheduleRequest): any => ({
    ...obj,
  });
}

export interface UpdateMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

export namespace UpdateMonitoringScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMonitoringScheduleResponse): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance to update.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon ML compute instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access the
   *             notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn?: string;

  /**
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

  /**
   * <p>Set to <code>true</code> to remove the notebook instance lifecycle configuration
   *             currently associated with the notebook instance. This operation is idempotent. If you
   *             specify a lifecycle configuration that is not associated with the notebook instance when
   *             you call this method, it does not throw an error.</p>
   */
  DisassociateLifecycleConfig?: boolean;

  /**
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB. ML storage volumes are encrypted, so Amazon SageMaker can't determine the
   *             amount of available free space on the volume. Because of this, you can increase the
   *             volume size when you update a notebook instance, but you can't decrease the volume size.
   *             If you want to decrease the size of the ML storage volume in use, create a new notebook
   *             instance with the desired size.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>The Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>A list of the Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon
   *                 SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>A list of the Elastic Inference (EI) instance types to remove from this notebook
   *             instance. This operation is idempotent. If you specify an accelerator type that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAcceleratorTypes?: boolean;

  /**
   * <p>The name or URL of the default Git repository to remove from this notebook instance.
   *             This operation is idempotent. If you specify a Git repository that is not associated
   *             with the notebook instance when you call this method, it does not throw an error.</p>
   */
  DisassociateDefaultCodeRepository?: boolean;

  /**
   * <p>A list of names or URLs of the default Git repositories to remove from this notebook
   *             instance. This operation is idempotent. If you specify a Git repository that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAdditionalCodeRepositories?: boolean;

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance. The
   *             default value is <code>Enabled</code>.</p>
   *         <note>
   *             <p>If you set this to <code>Disabled</code>, users don't have root access on the
   *                 notebook instance, but lifecycle configuration scripts still run with root
   *                 permissions.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;
}

export namespace UpdateNotebookInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceInput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceOutput {}

export namespace UpdateNotebookInstanceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceOutput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance. The shell script must be a base64-encoded
   *             string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];
}

export namespace UpdateNotebookInstanceLifecycleConfigInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceLifecycleConfigInput): any => ({
    ...obj,
  });
}

export interface UpdateNotebookInstanceLifecycleConfigOutput {}

export namespace UpdateNotebookInstanceLifecycleConfigOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotebookInstanceLifecycleConfigOutput): any => ({
    ...obj,
  });
}

export interface UpdatePipelineRequest {
  /**
   * <p>The name of the pipeline to update.</p>
   */
  PipelineName: string | undefined;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The JSON pipeline definition.</p>
   */
  PipelineDefinition?: string;

  /**
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   */
  RoleArn?: string;
}

export namespace UpdatePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineRequest): any => ({
    ...obj,
  });
}

export interface UpdatePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline.</p>
   */
  PipelineArn?: string;
}

export namespace UpdatePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineResponse): any => ({
    ...obj,
  });
}

export interface UpdatePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;
}

export namespace UpdatePipelineExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineExecutionRequest): any => ({
    ...obj,
  });
}

export interface UpdatePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated pipeline execution.</p>
   */
  PipelineExecutionArn?: string;
}

export namespace UpdatePipelineExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineExecutionResponse): any => ({
    ...obj,
  });
}

export interface UpdateTrainingJobRequest {
  /**
   * <p>The name of a training job to update the Debugger profiling configuration.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>Configuration information for Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfigForUpdate;

  /**
   * <p>Configuration information for Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];
}

export namespace UpdateTrainingJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrainingJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
}

export namespace UpdateTrainingJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrainingJobResponse): any => ({
    ...obj,
  });
}

export interface UpdateTrialRequest {
  /**
   * <p>The name of the trial to update.</p>
   */
  TrialName: string | undefined;

  /**
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;
}

export namespace UpdateTrialRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialRequest): any => ({
    ...obj,
  });
}

export interface UpdateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace UpdateTrialResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialResponse): any => ({
    ...obj,
  });
}

export interface UpdateTrialComponentRequest {
  /**
   * <p>The name of the component to update.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The new status of the component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>Replaces all of the component's hyperparameters with the specified hyperparameters.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>The hyperparameters to remove from the component.</p>
   */
  ParametersToRemove?: string[];

  /**
   * <p>Replaces all of the component's input artifacts with the specified artifacts.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The input artifacts to remove from the component.</p>
   */
  InputArtifactsToRemove?: string[];

  /**
   * <p>Replaces all of the component's output artifacts with the specified artifacts.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The output artifacts to remove from the component.</p>
   */
  OutputArtifactsToRemove?: string[];
}

export namespace UpdateTrialComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialComponentRequest): any => ({
    ...obj,
    ...(obj.Parameters && {
      Parameters: Object.entries(obj.Parameters).reduce(
        (acc: any, [key, value]: [string, TrialComponentParameterValue]) => ({
          ...acc,
          [key]: TrialComponentParameterValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

export interface UpdateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace UpdateTrialComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrialComponentResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace UpdateUserProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

export namespace UpdateUserProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserProfileResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkforceRequest {
  /**
   * <p>The name of the private workforce that you want to update. You can find your workforce
   *         name by using the  operation.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>A list of one to ten worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to
   *             access tasks assigned to this workforce.</p>
   *         <p>Maximum: Ten CIDR values</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>Use this parameter to update your OIDC Identity Provider (IdP)
   *       configuration for a workforce made using your own IdP.</p>
   */
  OidcConfig?: OidcConfig;
}

export namespace UpdateWorkforceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
    ...obj,
    ...(obj.OidcConfig && { OidcConfig: OidcConfig.filterSensitiveLog(obj.OidcConfig) }),
  });
}

export interface UpdateWorkforceResponse {
  /**
   * <p>A single private workforce. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export namespace UpdateWorkforceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkforceResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkteamRequest {
  /**
   * <p>The name of the work team to update.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *         <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>. You should not provide input
   *             for both of these parameters in a single request.</p>
   *         <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *         <p>For workforces created using your own OIDC IdP, specify the user groups that you want
   *             to include in your private work team in <code>OidcMemberDefinition</code> by listing
   *             those groups in <code>Groups</code>. Be aware that user groups that are already in the
   *             work team must also be listed in <code>Groups</code> when you make this request to
   *             remain on the work team. If you do not include these user groups, they will no longer be
   *             associated with the work team you update. </p>
   */
  MemberDefinitions?: MemberDefinition[];

  /**
   * <p>An updated description for the work team.</p>
   */
  Description?: string;

  /**
   * <p>Configures SNS topic notifications for available or expiring work items</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

export namespace UpdateWorkteamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkteamRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   */
  Workteam: Workteam | undefined;
}

export namespace UpdateWorkteamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkteamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource
 *       objects that satisfy the expression's condition are included in the search results. You must specify at
 *       least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to
 *       twenty elements.</p>
 *          <p>A <code>SearchExpression</code> contains the following components:</p>
 *          <ul>
 *             <li>
 *                <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean
 *           expression comprised of a resource property name, Boolean operator, and
 *           value.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list
 *           of Boolean expressions using a list of resource properties. A nested filter is
 *           satisfied if a single object in the list satisfies all Boolean
 *           expressions.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>SearchExpression</code> objects. A search expression object
 *           can be nested in a list of search expression objects.</p>
 *             </li>
 *             <li>
 *                <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p>
 *             </li>
 *          </ul>
 */
export interface SearchExpression {
  /**
   * <p>A list of filter objects.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A list of nested filter objects.</p>
   */
  NestedFilters?: NestedFilters[];

  /**
   * <p>A list of search expression objects.</p>
   */
  SubExpressions?: SearchExpression[];

  /**
   * <p>A Boolean operator used to evaluate the search expression. If you want every
   *       conditional statement in all lists to be satisfied for the entire search expression to
   *       be true, specify <code>And</code>. If only a single conditional statement needs to be
   *       true for the entire search expression to be true, specify <code>Or</code>. The default
   *       value is <code>And</code>.</p>
   */
  Operator?: BooleanOperator | string;
}

export namespace SearchExpression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchExpression): any => ({
    ...obj,
  });
}

export interface SearchRequest {
  /**
   * <p>The name of the Amazon SageMaker resource to search for.</p>
   */
  Resource: ResourceType | string | undefined;

  /**
   * <p>A Boolean conditional statement. Resources must satisfy this condition to be
   *       included in search results. You must provide at least one subexpression, filter, or
   *       nested filter. The maximum number of recursive <code>SubExpressions</code>,
   *       <code>NestedFilters</code>, and <code>Filters</code> that can be included in a
   *       <code>SearchExpression</code> object is 50.</p>
   */
  SearchExpression?: SearchExpression;

  /**
   * <p>The name of the resource property used to sort the <code>SearchResults</code>. The
   *       default is <code>LastModifiedTime</code>.</p>
   */
  SortBy?: string;

  /**
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or
   *       <code>Descending</code>. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SearchSortOrder | string;

  /**
   * <p>If more than <code>MaxResults</code> resources match the specified
   *       <code>SearchExpression</code>, the response includes a
   *       <code>NextToken</code>. The <code>NextToken</code> can be passed to the next
   *       <code>SearchRequest</code> to continue retrieving results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace SearchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchRequest): any => ({
    ...obj,
  });
}
