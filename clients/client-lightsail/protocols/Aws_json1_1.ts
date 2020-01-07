import {
  AllocateStaticIpCommandInput,
  AllocateStaticIpCommandOutput
} from "../commands/AllocateStaticIpCommand";
import {
  AttachDiskCommandInput,
  AttachDiskCommandOutput
} from "../commands/AttachDiskCommand";
import {
  AttachInstancesToLoadBalancerCommandInput,
  AttachInstancesToLoadBalancerCommandOutput
} from "../commands/AttachInstancesToLoadBalancerCommand";
import {
  AttachLoadBalancerTlsCertificateCommandInput,
  AttachLoadBalancerTlsCertificateCommandOutput
} from "../commands/AttachLoadBalancerTlsCertificateCommand";
import {
  AttachStaticIpCommandInput,
  AttachStaticIpCommandOutput
} from "../commands/AttachStaticIpCommand";
import {
  CloseInstancePublicPortsCommandInput,
  CloseInstancePublicPortsCommandOutput
} from "../commands/CloseInstancePublicPortsCommand";
import {
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput
} from "../commands/CopySnapshotCommand";
import {
  CreateCloudFormationStackCommandInput,
  CreateCloudFormationStackCommandOutput
} from "../commands/CreateCloudFormationStackCommand";
import {
  CreateDiskCommandInput,
  CreateDiskCommandOutput
} from "../commands/CreateDiskCommand";
import {
  CreateDiskFromSnapshotCommandInput,
  CreateDiskFromSnapshotCommandOutput
} from "../commands/CreateDiskFromSnapshotCommand";
import {
  CreateDiskSnapshotCommandInput,
  CreateDiskSnapshotCommandOutput
} from "../commands/CreateDiskSnapshotCommand";
import {
  CreateDomainCommandInput,
  CreateDomainCommandOutput
} from "../commands/CreateDomainCommand";
import {
  CreateDomainEntryCommandInput,
  CreateDomainEntryCommandOutput
} from "../commands/CreateDomainEntryCommand";
import {
  CreateInstanceSnapshotCommandInput,
  CreateInstanceSnapshotCommandOutput
} from "../commands/CreateInstanceSnapshotCommand";
import {
  CreateInstancesCommandInput,
  CreateInstancesCommandOutput
} from "../commands/CreateInstancesCommand";
import {
  CreateInstancesFromSnapshotCommandInput,
  CreateInstancesFromSnapshotCommandOutput
} from "../commands/CreateInstancesFromSnapshotCommand";
import {
  CreateKeyPairCommandInput,
  CreateKeyPairCommandOutput
} from "../commands/CreateKeyPairCommand";
import {
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput
} from "../commands/CreateLoadBalancerCommand";
import {
  CreateLoadBalancerTlsCertificateCommandInput,
  CreateLoadBalancerTlsCertificateCommandOutput
} from "../commands/CreateLoadBalancerTlsCertificateCommand";
import {
  CreateRelationalDatabaseCommandInput,
  CreateRelationalDatabaseCommandOutput
} from "../commands/CreateRelationalDatabaseCommand";
import {
  CreateRelationalDatabaseFromSnapshotCommandInput,
  CreateRelationalDatabaseFromSnapshotCommandOutput
} from "../commands/CreateRelationalDatabaseFromSnapshotCommand";
import {
  CreateRelationalDatabaseSnapshotCommandInput,
  CreateRelationalDatabaseSnapshotCommandOutput
} from "../commands/CreateRelationalDatabaseSnapshotCommand";
import {
  DeleteAutoSnapshotCommandInput,
  DeleteAutoSnapshotCommandOutput
} from "../commands/DeleteAutoSnapshotCommand";
import {
  DeleteDiskCommandInput,
  DeleteDiskCommandOutput
} from "../commands/DeleteDiskCommand";
import {
  DeleteDiskSnapshotCommandInput,
  DeleteDiskSnapshotCommandOutput
} from "../commands/DeleteDiskSnapshotCommand";
import {
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput
} from "../commands/DeleteDomainCommand";
import {
  DeleteDomainEntryCommandInput,
  DeleteDomainEntryCommandOutput
} from "../commands/DeleteDomainEntryCommand";
import {
  DeleteInstanceCommandInput,
  DeleteInstanceCommandOutput
} from "../commands/DeleteInstanceCommand";
import {
  DeleteInstanceSnapshotCommandInput,
  DeleteInstanceSnapshotCommandOutput
} from "../commands/DeleteInstanceSnapshotCommand";
import {
  DeleteKeyPairCommandInput,
  DeleteKeyPairCommandOutput
} from "../commands/DeleteKeyPairCommand";
import {
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput
} from "../commands/DeleteKnownHostKeysCommand";
import {
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput
} from "../commands/DeleteLoadBalancerCommand";
import {
  DeleteLoadBalancerTlsCertificateCommandInput,
  DeleteLoadBalancerTlsCertificateCommandOutput
} from "../commands/DeleteLoadBalancerTlsCertificateCommand";
import {
  DeleteRelationalDatabaseCommandInput,
  DeleteRelationalDatabaseCommandOutput
} from "../commands/DeleteRelationalDatabaseCommand";
import {
  DeleteRelationalDatabaseSnapshotCommandInput,
  DeleteRelationalDatabaseSnapshotCommandOutput
} from "../commands/DeleteRelationalDatabaseSnapshotCommand";
import {
  DetachDiskCommandInput,
  DetachDiskCommandOutput
} from "../commands/DetachDiskCommand";
import {
  DetachInstancesFromLoadBalancerCommandInput,
  DetachInstancesFromLoadBalancerCommandOutput
} from "../commands/DetachInstancesFromLoadBalancerCommand";
import {
  DetachStaticIpCommandInput,
  DetachStaticIpCommandOutput
} from "../commands/DetachStaticIpCommand";
import {
  DisableAddOnCommandInput,
  DisableAddOnCommandOutput
} from "../commands/DisableAddOnCommand";
import {
  DownloadDefaultKeyPairCommandInput,
  DownloadDefaultKeyPairCommandOutput
} from "../commands/DownloadDefaultKeyPairCommand";
import {
  EnableAddOnCommandInput,
  EnableAddOnCommandOutput
} from "../commands/EnableAddOnCommand";
import {
  ExportSnapshotCommandInput,
  ExportSnapshotCommandOutput
} from "../commands/ExportSnapshotCommand";
import {
  GetActiveNamesCommandInput,
  GetActiveNamesCommandOutput
} from "../commands/GetActiveNamesCommand";
import {
  GetAutoSnapshotsCommandInput,
  GetAutoSnapshotsCommandOutput
} from "../commands/GetAutoSnapshotsCommand";
import {
  GetBlueprintsCommandInput,
  GetBlueprintsCommandOutput
} from "../commands/GetBlueprintsCommand";
import {
  GetBundlesCommandInput,
  GetBundlesCommandOutput
} from "../commands/GetBundlesCommand";
import {
  GetCloudFormationStackRecordsCommandInput,
  GetCloudFormationStackRecordsCommandOutput
} from "../commands/GetCloudFormationStackRecordsCommand";
import {
  GetDiskCommandInput,
  GetDiskCommandOutput
} from "../commands/GetDiskCommand";
import {
  GetDiskSnapshotCommandInput,
  GetDiskSnapshotCommandOutput
} from "../commands/GetDiskSnapshotCommand";
import {
  GetDiskSnapshotsCommandInput,
  GetDiskSnapshotsCommandOutput
} from "../commands/GetDiskSnapshotsCommand";
import {
  GetDisksCommandInput,
  GetDisksCommandOutput
} from "../commands/GetDisksCommand";
import {
  GetDomainCommandInput,
  GetDomainCommandOutput
} from "../commands/GetDomainCommand";
import {
  GetDomainsCommandInput,
  GetDomainsCommandOutput
} from "../commands/GetDomainsCommand";
import {
  GetExportSnapshotRecordsCommandInput,
  GetExportSnapshotRecordsCommandOutput
} from "../commands/GetExportSnapshotRecordsCommand";
import {
  GetInstanceAccessDetailsCommandInput,
  GetInstanceAccessDetailsCommandOutput
} from "../commands/GetInstanceAccessDetailsCommand";
import {
  GetInstanceCommandInput,
  GetInstanceCommandOutput
} from "../commands/GetInstanceCommand";
import {
  GetInstanceMetricDataCommandInput,
  GetInstanceMetricDataCommandOutput
} from "../commands/GetInstanceMetricDataCommand";
import {
  GetInstancePortStatesCommandInput,
  GetInstancePortStatesCommandOutput
} from "../commands/GetInstancePortStatesCommand";
import {
  GetInstanceSnapshotCommandInput,
  GetInstanceSnapshotCommandOutput
} from "../commands/GetInstanceSnapshotCommand";
import {
  GetInstanceSnapshotsCommandInput,
  GetInstanceSnapshotsCommandOutput
} from "../commands/GetInstanceSnapshotsCommand";
import {
  GetInstanceStateCommandInput,
  GetInstanceStateCommandOutput
} from "../commands/GetInstanceStateCommand";
import {
  GetInstancesCommandInput,
  GetInstancesCommandOutput
} from "../commands/GetInstancesCommand";
import {
  GetKeyPairCommandInput,
  GetKeyPairCommandOutput
} from "../commands/GetKeyPairCommand";
import {
  GetKeyPairsCommandInput,
  GetKeyPairsCommandOutput
} from "../commands/GetKeyPairsCommand";
import {
  GetLoadBalancerCommandInput,
  GetLoadBalancerCommandOutput
} from "../commands/GetLoadBalancerCommand";
import {
  GetLoadBalancerMetricDataCommandInput,
  GetLoadBalancerMetricDataCommandOutput
} from "../commands/GetLoadBalancerMetricDataCommand";
import {
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput
} from "../commands/GetLoadBalancerTlsCertificatesCommand";
import {
  GetLoadBalancersCommandInput,
  GetLoadBalancersCommandOutput
} from "../commands/GetLoadBalancersCommand";
import {
  GetOperationCommandInput,
  GetOperationCommandOutput
} from "../commands/GetOperationCommand";
import {
  GetOperationsCommandInput,
  GetOperationsCommandOutput
} from "../commands/GetOperationsCommand";
import {
  GetOperationsForResourceCommandInput,
  GetOperationsForResourceCommandOutput
} from "../commands/GetOperationsForResourceCommand";
import {
  GetRegionsCommandInput,
  GetRegionsCommandOutput
} from "../commands/GetRegionsCommand";
import {
  GetRelationalDatabaseBlueprintsCommandInput,
  GetRelationalDatabaseBlueprintsCommandOutput
} from "../commands/GetRelationalDatabaseBlueprintsCommand";
import {
  GetRelationalDatabaseBundlesCommandInput,
  GetRelationalDatabaseBundlesCommandOutput
} from "../commands/GetRelationalDatabaseBundlesCommand";
import {
  GetRelationalDatabaseCommandInput,
  GetRelationalDatabaseCommandOutput
} from "../commands/GetRelationalDatabaseCommand";
import {
  GetRelationalDatabaseEventsCommandInput,
  GetRelationalDatabaseEventsCommandOutput
} from "../commands/GetRelationalDatabaseEventsCommand";
import {
  GetRelationalDatabaseLogEventsCommandInput,
  GetRelationalDatabaseLogEventsCommandOutput
} from "../commands/GetRelationalDatabaseLogEventsCommand";
import {
  GetRelationalDatabaseLogStreamsCommandInput,
  GetRelationalDatabaseLogStreamsCommandOutput
} from "../commands/GetRelationalDatabaseLogStreamsCommand";
import {
  GetRelationalDatabaseMasterUserPasswordCommandInput,
  GetRelationalDatabaseMasterUserPasswordCommandOutput
} from "../commands/GetRelationalDatabaseMasterUserPasswordCommand";
import {
  GetRelationalDatabaseMetricDataCommandInput,
  GetRelationalDatabaseMetricDataCommandOutput
} from "../commands/GetRelationalDatabaseMetricDataCommand";
import {
  GetRelationalDatabaseParametersCommandInput,
  GetRelationalDatabaseParametersCommandOutput
} from "../commands/GetRelationalDatabaseParametersCommand";
import {
  GetRelationalDatabaseSnapshotCommandInput,
  GetRelationalDatabaseSnapshotCommandOutput
} from "../commands/GetRelationalDatabaseSnapshotCommand";
import {
  GetRelationalDatabaseSnapshotsCommandInput,
  GetRelationalDatabaseSnapshotsCommandOutput
} from "../commands/GetRelationalDatabaseSnapshotsCommand";
import {
  GetRelationalDatabasesCommandInput,
  GetRelationalDatabasesCommandOutput
} from "../commands/GetRelationalDatabasesCommand";
import {
  GetStaticIpCommandInput,
  GetStaticIpCommandOutput
} from "../commands/GetStaticIpCommand";
import {
  GetStaticIpsCommandInput,
  GetStaticIpsCommandOutput
} from "../commands/GetStaticIpsCommand";
import {
  ImportKeyPairCommandInput,
  ImportKeyPairCommandOutput
} from "../commands/ImportKeyPairCommand";
import {
  IsVpcPeeredCommandInput,
  IsVpcPeeredCommandOutput
} from "../commands/IsVpcPeeredCommand";
import {
  OpenInstancePublicPortsCommandInput,
  OpenInstancePublicPortsCommandOutput
} from "../commands/OpenInstancePublicPortsCommand";
import {
  PeerVpcCommandInput,
  PeerVpcCommandOutput
} from "../commands/PeerVpcCommand";
import {
  PutInstancePublicPortsCommandInput,
  PutInstancePublicPortsCommandOutput
} from "../commands/PutInstancePublicPortsCommand";
import {
  RebootInstanceCommandInput,
  RebootInstanceCommandOutput
} from "../commands/RebootInstanceCommand";
import {
  RebootRelationalDatabaseCommandInput,
  RebootRelationalDatabaseCommandOutput
} from "../commands/RebootRelationalDatabaseCommand";
import {
  ReleaseStaticIpCommandInput,
  ReleaseStaticIpCommandOutput
} from "../commands/ReleaseStaticIpCommand";
import {
  StartInstanceCommandInput,
  StartInstanceCommandOutput
} from "../commands/StartInstanceCommand";
import {
  StartRelationalDatabaseCommandInput,
  StartRelationalDatabaseCommandOutput
} from "../commands/StartRelationalDatabaseCommand";
import {
  StopInstanceCommandInput,
  StopInstanceCommandOutput
} from "../commands/StopInstanceCommand";
import {
  StopRelationalDatabaseCommandInput,
  StopRelationalDatabaseCommandOutput
} from "../commands/StopRelationalDatabaseCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UnpeerVpcCommandInput,
  UnpeerVpcCommandOutput
} from "../commands/UnpeerVpcCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateDomainEntryCommandInput,
  UpdateDomainEntryCommandOutput
} from "../commands/UpdateDomainEntryCommand";
import {
  UpdateLoadBalancerAttributeCommandInput,
  UpdateLoadBalancerAttributeCommandOutput
} from "../commands/UpdateLoadBalancerAttributeCommand";
import {
  UpdateRelationalDatabaseCommandInput,
  UpdateRelationalDatabaseCommandOutput
} from "../commands/UpdateRelationalDatabaseCommand";
import {
  UpdateRelationalDatabaseParametersCommandInput,
  UpdateRelationalDatabaseParametersCommandOutput
} from "../commands/UpdateRelationalDatabaseParametersCommand";
import {
  AccessDeniedException,
  AccountSetupInProgressException,
  AddOn,
  AddOnRequest,
  AllocateStaticIpRequest,
  AllocateStaticIpResult,
  AttachDiskRequest,
  AttachDiskResult,
  AttachInstancesToLoadBalancerRequest,
  AttachInstancesToLoadBalancerResult,
  AttachLoadBalancerTlsCertificateRequest,
  AttachLoadBalancerTlsCertificateResult,
  AttachStaticIpRequest,
  AttachStaticIpResult,
  AttachedDisk,
  AutoSnapshotAddOnRequest,
  AutoSnapshotDetails,
  AvailabilityZone,
  Blueprint,
  Bundle,
  CloseInstancePublicPortsRequest,
  CloseInstancePublicPortsResult,
  CloudFormationStackRecord,
  CloudFormationStackRecordSourceInfo,
  CopySnapshotRequest,
  CopySnapshotResult,
  CreateCloudFormationStackRequest,
  CreateCloudFormationStackResult,
  CreateDiskFromSnapshotRequest,
  CreateDiskFromSnapshotResult,
  CreateDiskRequest,
  CreateDiskResult,
  CreateDiskSnapshotRequest,
  CreateDiskSnapshotResult,
  CreateDomainEntryRequest,
  CreateDomainEntryResult,
  CreateDomainRequest,
  CreateDomainResult,
  CreateInstanceSnapshotRequest,
  CreateInstanceSnapshotResult,
  CreateInstancesFromSnapshotRequest,
  CreateInstancesFromSnapshotResult,
  CreateInstancesRequest,
  CreateInstancesResult,
  CreateKeyPairRequest,
  CreateKeyPairResult,
  CreateLoadBalancerRequest,
  CreateLoadBalancerResult,
  CreateLoadBalancerTlsCertificateRequest,
  CreateLoadBalancerTlsCertificateResult,
  CreateRelationalDatabaseFromSnapshotRequest,
  CreateRelationalDatabaseFromSnapshotResult,
  CreateRelationalDatabaseRequest,
  CreateRelationalDatabaseResult,
  CreateRelationalDatabaseSnapshotRequest,
  CreateRelationalDatabaseSnapshotResult,
  DeleteAutoSnapshotRequest,
  DeleteAutoSnapshotResult,
  DeleteDiskRequest,
  DeleteDiskResult,
  DeleteDiskSnapshotRequest,
  DeleteDiskSnapshotResult,
  DeleteDomainEntryRequest,
  DeleteDomainEntryResult,
  DeleteDomainRequest,
  DeleteDomainResult,
  DeleteInstanceRequest,
  DeleteInstanceResult,
  DeleteInstanceSnapshotRequest,
  DeleteInstanceSnapshotResult,
  DeleteKeyPairRequest,
  DeleteKeyPairResult,
  DeleteKnownHostKeysRequest,
  DeleteKnownHostKeysResult,
  DeleteLoadBalancerRequest,
  DeleteLoadBalancerResult,
  DeleteLoadBalancerTlsCertificateRequest,
  DeleteLoadBalancerTlsCertificateResult,
  DeleteRelationalDatabaseRequest,
  DeleteRelationalDatabaseResult,
  DeleteRelationalDatabaseSnapshotRequest,
  DeleteRelationalDatabaseSnapshotResult,
  DestinationInfo,
  DetachDiskRequest,
  DetachDiskResult,
  DetachInstancesFromLoadBalancerRequest,
  DetachInstancesFromLoadBalancerResult,
  DetachStaticIpRequest,
  DetachStaticIpResult,
  DisableAddOnRequest,
  DisableAddOnResult,
  Disk,
  DiskInfo,
  DiskMap,
  DiskSnapshot,
  DiskSnapshotInfo,
  Domain,
  DomainEntry,
  DownloadDefaultKeyPairRequest,
  DownloadDefaultKeyPairResult,
  EnableAddOnRequest,
  EnableAddOnResult,
  ExportSnapshotRecord,
  ExportSnapshotRecordSourceInfo,
  ExportSnapshotRequest,
  ExportSnapshotResult,
  GetActiveNamesRequest,
  GetActiveNamesResult,
  GetAutoSnapshotsRequest,
  GetAutoSnapshotsResult,
  GetBlueprintsRequest,
  GetBlueprintsResult,
  GetBundlesRequest,
  GetBundlesResult,
  GetCloudFormationStackRecordsRequest,
  GetCloudFormationStackRecordsResult,
  GetDiskRequest,
  GetDiskResult,
  GetDiskSnapshotRequest,
  GetDiskSnapshotResult,
  GetDiskSnapshotsRequest,
  GetDiskSnapshotsResult,
  GetDisksRequest,
  GetDisksResult,
  GetDomainRequest,
  GetDomainResult,
  GetDomainsRequest,
  GetDomainsResult,
  GetExportSnapshotRecordsRequest,
  GetExportSnapshotRecordsResult,
  GetInstanceAccessDetailsRequest,
  GetInstanceAccessDetailsResult,
  GetInstanceMetricDataRequest,
  GetInstanceMetricDataResult,
  GetInstancePortStatesRequest,
  GetInstancePortStatesResult,
  GetInstanceRequest,
  GetInstanceResult,
  GetInstanceSnapshotRequest,
  GetInstanceSnapshotResult,
  GetInstanceSnapshotsRequest,
  GetInstanceSnapshotsResult,
  GetInstanceStateRequest,
  GetInstanceStateResult,
  GetInstancesRequest,
  GetInstancesResult,
  GetKeyPairRequest,
  GetKeyPairResult,
  GetKeyPairsRequest,
  GetKeyPairsResult,
  GetLoadBalancerMetricDataRequest,
  GetLoadBalancerMetricDataResult,
  GetLoadBalancerRequest,
  GetLoadBalancerResult,
  GetLoadBalancerTlsCertificatesRequest,
  GetLoadBalancerTlsCertificatesResult,
  GetLoadBalancersRequest,
  GetLoadBalancersResult,
  GetOperationRequest,
  GetOperationResult,
  GetOperationsForResourceRequest,
  GetOperationsForResourceResult,
  GetOperationsRequest,
  GetOperationsResult,
  GetRegionsRequest,
  GetRegionsResult,
  GetRelationalDatabaseBlueprintsRequest,
  GetRelationalDatabaseBlueprintsResult,
  GetRelationalDatabaseBundlesRequest,
  GetRelationalDatabaseBundlesResult,
  GetRelationalDatabaseEventsRequest,
  GetRelationalDatabaseEventsResult,
  GetRelationalDatabaseLogEventsRequest,
  GetRelationalDatabaseLogEventsResult,
  GetRelationalDatabaseLogStreamsRequest,
  GetRelationalDatabaseLogStreamsResult,
  GetRelationalDatabaseMasterUserPasswordRequest,
  GetRelationalDatabaseMasterUserPasswordResult,
  GetRelationalDatabaseMetricDataRequest,
  GetRelationalDatabaseMetricDataResult,
  GetRelationalDatabaseParametersRequest,
  GetRelationalDatabaseParametersResult,
  GetRelationalDatabaseRequest,
  GetRelationalDatabaseResult,
  GetRelationalDatabaseSnapshotRequest,
  GetRelationalDatabaseSnapshotResult,
  GetRelationalDatabaseSnapshotsRequest,
  GetRelationalDatabaseSnapshotsResult,
  GetRelationalDatabasesRequest,
  GetRelationalDatabasesResult,
  GetStaticIpRequest,
  GetStaticIpResult,
  GetStaticIpsRequest,
  GetStaticIpsResult,
  HostKeyAttributes,
  ImportKeyPairRequest,
  ImportKeyPairResult,
  Instance,
  InstanceAccessDetails,
  InstanceEntry,
  InstanceHardware,
  InstanceHealthSummary,
  InstanceNetworking,
  InstancePlatform,
  InstancePortInfo,
  InstancePortState,
  InstanceSnapshot,
  InstanceSnapshotInfo,
  InstanceState,
  InvalidInputException,
  IsVpcPeeredRequest,
  IsVpcPeeredResult,
  KeyPair,
  LoadBalancer,
  LoadBalancerTlsCertificate,
  LoadBalancerTlsCertificateDomainValidationOption,
  LoadBalancerTlsCertificateDomainValidationRecord,
  LoadBalancerTlsCertificateRenewalSummary,
  LoadBalancerTlsCertificateSummary,
  LogEvent,
  MetricDatapoint,
  MetricStatistic,
  MonthlyTransfer,
  NotFoundException,
  OpenInstancePublicPortsRequest,
  OpenInstancePublicPortsResult,
  Operation,
  OperationFailureException,
  PasswordData,
  PeerVpcRequest,
  PeerVpcResult,
  PendingMaintenanceAction,
  PendingModifiedRelationalDatabaseValues,
  PortInfo,
  PutInstancePublicPortsRequest,
  PutInstancePublicPortsResult,
  RebootInstanceRequest,
  RebootInstanceResult,
  RebootRelationalDatabaseRequest,
  RebootRelationalDatabaseResult,
  Region,
  RelationalDatabase,
  RelationalDatabaseBlueprint,
  RelationalDatabaseBundle,
  RelationalDatabaseEndpoint,
  RelationalDatabaseEvent,
  RelationalDatabaseHardware,
  RelationalDatabaseParameter,
  RelationalDatabaseSnapshot,
  ReleaseStaticIpRequest,
  ReleaseStaticIpResult,
  ResourceLocation,
  ServiceException,
  StartInstanceRequest,
  StartInstanceResult,
  StartRelationalDatabaseRequest,
  StartRelationalDatabaseResult,
  StaticIp,
  StopInstanceRequest,
  StopInstanceResult,
  StopRelationalDatabaseRequest,
  StopRelationalDatabaseResult,
  Tag,
  TagResourceRequest,
  TagResourceResult,
  UnauthenticatedException,
  UnpeerVpcRequest,
  UnpeerVpcResult,
  UntagResourceRequest,
  UntagResourceResult,
  UpdateDomainEntryRequest,
  UpdateDomainEntryResult,
  UpdateLoadBalancerAttributeRequest,
  UpdateLoadBalancerAttributeResult,
  UpdateRelationalDatabaseParametersRequest,
  UpdateRelationalDatabaseParametersResult,
  UpdateRelationalDatabaseRequest,
  UpdateRelationalDatabaseResult
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AllocateStaticIpCommand(
  input: AllocateStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.AllocateStaticIp";
  let body: any = {};
  const wrappedBody: any = {
    AllocateStaticIpRequest: serializeAws_json1_1AllocateStaticIpRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AllocateStaticIp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1AttachDiskCommand(
  input: AttachDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.AttachDisk";
  let body: any = {};
  const wrappedBody: any = {
    AttachDiskRequest: serializeAws_json1_1AttachDiskRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AttachDisk",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1AttachInstancesToLoadBalancerCommand(
  input: AttachInstancesToLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.AttachInstancesToLoadBalancer";
  let body: any = {};
  const wrappedBody: any = {
    AttachInstancesToLoadBalancerRequest: serializeAws_json1_1AttachInstancesToLoadBalancerRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AttachInstancesToLoadBalancer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand(
  input: AttachLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.AttachLoadBalancerTlsCertificate";
  let body: any = {};
  const wrappedBody: any = {
    AttachLoadBalancerTlsCertificateRequest: serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AttachLoadBalancerTlsCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1AttachStaticIpCommand(
  input: AttachStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.AttachStaticIp";
  let body: any = {};
  const wrappedBody: any = {
    AttachStaticIpRequest: serializeAws_json1_1AttachStaticIpRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AttachStaticIp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CloseInstancePublicPortsCommand(
  input: CloseInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CloseInstancePublicPorts";
  let body: any = {};
  const wrappedBody: any = {
    CloseInstancePublicPortsRequest: serializeAws_json1_1CloseInstancePublicPortsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CloseInstancePublicPorts",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CopySnapshotCommand(
  input: CopySnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CopySnapshot";
  let body: any = {};
  const wrappedBody: any = {
    CopySnapshotRequest: serializeAws_json1_1CopySnapshotRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CopySnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateCloudFormationStackCommand(
  input: CreateCloudFormationStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateCloudFormationStack";
  let body: any = {};
  const wrappedBody: any = {
    CreateCloudFormationStackRequest: serializeAws_json1_1CreateCloudFormationStackRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateCloudFormationStack",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDiskCommand(
  input: CreateDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateDisk";
  let body: any = {};
  const wrappedBody: any = {
    CreateDiskRequest: serializeAws_json1_1CreateDiskRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDisk",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDiskFromSnapshotCommand(
  input: CreateDiskFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateDiskFromSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    CreateDiskFromSnapshotRequest: serializeAws_json1_1CreateDiskFromSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDiskFromSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDiskSnapshotCommand(
  input: CreateDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateDiskSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    CreateDiskSnapshotRequest: serializeAws_json1_1CreateDiskSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDiskSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDomainCommand(
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateDomain";
  let body: any = {};
  const wrappedBody: any = {
    CreateDomainRequest: serializeAws_json1_1CreateDomainRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDomain",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDomainEntryCommand(
  input: CreateDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateDomainEntry";
  let body: any = {};
  const wrappedBody: any = {
    CreateDomainEntryRequest: serializeAws_json1_1CreateDomainEntryRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDomainEntry",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateInstanceSnapshotCommand(
  input: CreateInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateInstanceSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    CreateInstanceSnapshotRequest: serializeAws_json1_1CreateInstanceSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateInstanceSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateInstancesCommand(
  input: CreateInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateInstances";
  let body: any = {};
  const wrappedBody: any = {
    CreateInstancesRequest: serializeAws_json1_1CreateInstancesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateInstances",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateInstancesFromSnapshotCommand(
  input: CreateInstancesFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateInstancesFromSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    CreateInstancesFromSnapshotRequest: serializeAws_json1_1CreateInstancesFromSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateInstancesFromSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateKeyPairCommand(
  input: CreateKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateKeyPair";
  let body: any = {};
  const wrappedBody: any = {
    CreateKeyPairRequest: serializeAws_json1_1CreateKeyPairRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateKeyPair",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateLoadBalancerCommand(
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateLoadBalancer";
  let body: any = {};
  const wrappedBody: any = {
    CreateLoadBalancerRequest: serializeAws_json1_1CreateLoadBalancerRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateLoadBalancer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand(
  input: CreateLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.CreateLoadBalancerTlsCertificate";
  let body: any = {};
  const wrappedBody: any = {
    CreateLoadBalancerTlsCertificateRequest: serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateLoadBalancerTlsCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateRelationalDatabaseCommand(
  input: CreateRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.CreateRelationalDatabase";
  let body: any = {};
  const wrappedBody: any = {
    CreateRelationalDatabaseRequest: serializeAws_json1_1CreateRelationalDatabaseRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateRelationalDatabase",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(
  input: CreateRelationalDatabaseFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.CreateRelationalDatabaseFromSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    CreateRelationalDatabaseFromSnapshotRequest: serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateRelationalDatabaseFromSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand(
  input: CreateRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.CreateRelationalDatabaseSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    CreateRelationalDatabaseSnapshotRequest: serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateRelationalDatabaseSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteAutoSnapshotCommand(
  input: DeleteAutoSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteAutoSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    DeleteAutoSnapshotRequest: serializeAws_json1_1DeleteAutoSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteAutoSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDiskCommand(
  input: DeleteDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteDisk";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDiskRequest: serializeAws_json1_1DeleteDiskRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDisk",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDiskSnapshotCommand(
  input: DeleteDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteDiskSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDiskSnapshotRequest: serializeAws_json1_1DeleteDiskSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDiskSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDomainCommand(
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteDomain";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDomainRequest: serializeAws_json1_1DeleteDomainRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDomain",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDomainEntryCommand(
  input: DeleteDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteDomainEntry";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDomainEntryRequest: serializeAws_json1_1DeleteDomainEntryRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDomainEntry",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteInstanceCommand(
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteInstance";
  let body: any = {};
  const wrappedBody: any = {
    DeleteInstanceRequest: serializeAws_json1_1DeleteInstanceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteInstanceSnapshotCommand(
  input: DeleteInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteInstanceSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    DeleteInstanceSnapshotRequest: serializeAws_json1_1DeleteInstanceSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteInstanceSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteKeyPairCommand(
  input: DeleteKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteKeyPair";
  let body: any = {};
  const wrappedBody: any = {
    DeleteKeyPairRequest: serializeAws_json1_1DeleteKeyPairRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteKeyPair",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteKnownHostKeysCommand(
  input: DeleteKnownHostKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteKnownHostKeys";
  let body: any = {};
  const wrappedBody: any = {
    DeleteKnownHostKeysRequest: serializeAws_json1_1DeleteKnownHostKeysRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteKnownHostKeys",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteLoadBalancerCommand(
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteLoadBalancer";
  let body: any = {};
  const wrappedBody: any = {
    DeleteLoadBalancerRequest: serializeAws_json1_1DeleteLoadBalancerRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteLoadBalancer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand(
  input: DeleteLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.DeleteLoadBalancerTlsCertificate";
  let body: any = {};
  const wrappedBody: any = {
    DeleteLoadBalancerTlsCertificateRequest: serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteLoadBalancerTlsCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteRelationalDatabaseCommand(
  input: DeleteRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DeleteRelationalDatabase";
  let body: any = {};
  const wrappedBody: any = {
    DeleteRelationalDatabaseRequest: serializeAws_json1_1DeleteRelationalDatabaseRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteRelationalDatabase",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand(
  input: DeleteRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.DeleteRelationalDatabaseSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    DeleteRelationalDatabaseSnapshotRequest: serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteRelationalDatabaseSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DetachDiskCommand(
  input: DetachDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DetachDisk";
  let body: any = {};
  const wrappedBody: any = {
    DetachDiskRequest: serializeAws_json1_1DetachDiskRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DetachDisk",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DetachInstancesFromLoadBalancerCommand(
  input: DetachInstancesFromLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.DetachInstancesFromLoadBalancer";
  let body: any = {};
  const wrappedBody: any = {
    DetachInstancesFromLoadBalancerRequest: serializeAws_json1_1DetachInstancesFromLoadBalancerRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DetachInstancesFromLoadBalancer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DetachStaticIpCommand(
  input: DetachStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DetachStaticIp";
  let body: any = {};
  const wrappedBody: any = {
    DetachStaticIpRequest: serializeAws_json1_1DetachStaticIpRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DetachStaticIp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DisableAddOnCommand(
  input: DisableAddOnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DisableAddOn";
  let body: any = {};
  const wrappedBody: any = {
    DisableAddOnRequest: serializeAws_json1_1DisableAddOnRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisableAddOn",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DownloadDefaultKeyPairCommand(
  input: DownloadDefaultKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.DownloadDefaultKeyPair";
  let body: any = {};
  const wrappedBody: any = {
    DownloadDefaultKeyPairRequest: serializeAws_json1_1DownloadDefaultKeyPairRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DownloadDefaultKeyPair",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1EnableAddOnCommand(
  input: EnableAddOnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.EnableAddOn";
  let body: any = {};
  const wrappedBody: any = {
    EnableAddOnRequest: serializeAws_json1_1EnableAddOnRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/EnableAddOn",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ExportSnapshotCommand(
  input: ExportSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.ExportSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    ExportSnapshotRequest: serializeAws_json1_1ExportSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ExportSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetActiveNamesCommand(
  input: GetActiveNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetActiveNames";
  let body: any = {};
  const wrappedBody: any = {
    GetActiveNamesRequest: serializeAws_json1_1GetActiveNamesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetActiveNames",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetAutoSnapshotsCommand(
  input: GetAutoSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetAutoSnapshots";
  let body: any = {};
  const wrappedBody: any = {
    GetAutoSnapshotsRequest: serializeAws_json1_1GetAutoSnapshotsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetAutoSnapshots",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetBlueprintsCommand(
  input: GetBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetBlueprints";
  let body: any = {};
  const wrappedBody: any = {
    GetBlueprintsRequest: serializeAws_json1_1GetBlueprintsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetBlueprints",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetBundlesCommand(
  input: GetBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetBundles";
  let body: any = {};
  const wrappedBody: any = {
    GetBundlesRequest: serializeAws_json1_1GetBundlesRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetBundles",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetCloudFormationStackRecordsCommand(
  input: GetCloudFormationStackRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetCloudFormationStackRecords";
  let body: any = {};
  const wrappedBody: any = {
    GetCloudFormationStackRecordsRequest: serializeAws_json1_1GetCloudFormationStackRecordsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetCloudFormationStackRecords",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDiskCommand(
  input: GetDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetDisk";
  let body: any = {};
  const wrappedBody: any = {
    GetDiskRequest: serializeAws_json1_1GetDiskRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDisk",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDiskSnapshotCommand(
  input: GetDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetDiskSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    GetDiskSnapshotRequest: serializeAws_json1_1GetDiskSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDiskSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDiskSnapshotsCommand(
  input: GetDiskSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetDiskSnapshots";
  let body: any = {};
  const wrappedBody: any = {
    GetDiskSnapshotsRequest: serializeAws_json1_1GetDiskSnapshotsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDiskSnapshots",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDisksCommand(
  input: GetDisksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetDisks";
  let body: any = {};
  const wrappedBody: any = {
    GetDisksRequest: serializeAws_json1_1GetDisksRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDisks",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDomainCommand(
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetDomain";
  let body: any = {};
  const wrappedBody: any = {
    GetDomainRequest: serializeAws_json1_1GetDomainRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDomain",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDomainsCommand(
  input: GetDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetDomains";
  let body: any = {};
  const wrappedBody: any = {
    GetDomainsRequest: serializeAws_json1_1GetDomainsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDomains",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetExportSnapshotRecordsCommand(
  input: GetExportSnapshotRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetExportSnapshotRecords";
  let body: any = {};
  const wrappedBody: any = {
    GetExportSnapshotRecordsRequest: serializeAws_json1_1GetExportSnapshotRecordsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetExportSnapshotRecords",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetInstanceCommand(
  input: GetInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetInstance";
  let body: any = {};
  const wrappedBody: any = {
    GetInstanceRequest: serializeAws_json1_1GetInstanceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetInstanceAccessDetailsCommand(
  input: GetInstanceAccessDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetInstanceAccessDetails";
  let body: any = {};
  const wrappedBody: any = {
    GetInstanceAccessDetailsRequest: serializeAws_json1_1GetInstanceAccessDetailsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetInstanceAccessDetails",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetInstanceMetricDataCommand(
  input: GetInstanceMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetInstanceMetricData";
  let body: any = {};
  const wrappedBody: any = {
    GetInstanceMetricDataRequest: serializeAws_json1_1GetInstanceMetricDataRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetInstanceMetricData",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetInstancePortStatesCommand(
  input: GetInstancePortStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetInstancePortStates";
  let body: any = {};
  const wrappedBody: any = {
    GetInstancePortStatesRequest: serializeAws_json1_1GetInstancePortStatesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetInstancePortStates",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetInstanceSnapshotCommand(
  input: GetInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetInstanceSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    GetInstanceSnapshotRequest: serializeAws_json1_1GetInstanceSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetInstanceSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetInstanceSnapshotsCommand(
  input: GetInstanceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetInstanceSnapshots";
  let body: any = {};
  const wrappedBody: any = {
    GetInstanceSnapshotsRequest: serializeAws_json1_1GetInstanceSnapshotsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetInstanceSnapshots",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetInstanceStateCommand(
  input: GetInstanceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetInstanceState";
  let body: any = {};
  const wrappedBody: any = {
    GetInstanceStateRequest: serializeAws_json1_1GetInstanceStateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetInstanceState",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetInstancesCommand(
  input: GetInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetInstances";
  let body: any = {};
  const wrappedBody: any = {
    GetInstancesRequest: serializeAws_json1_1GetInstancesRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetInstances",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetKeyPairCommand(
  input: GetKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetKeyPair";
  let body: any = {};
  const wrappedBody: any = {
    GetKeyPairRequest: serializeAws_json1_1GetKeyPairRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetKeyPair",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetKeyPairsCommand(
  input: GetKeyPairsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetKeyPairs";
  let body: any = {};
  const wrappedBody: any = {
    GetKeyPairsRequest: serializeAws_json1_1GetKeyPairsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetKeyPairs",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetLoadBalancerCommand(
  input: GetLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetLoadBalancer";
  let body: any = {};
  const wrappedBody: any = {
    GetLoadBalancerRequest: serializeAws_json1_1GetLoadBalancerRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetLoadBalancer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetLoadBalancerMetricDataCommand(
  input: GetLoadBalancerMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetLoadBalancerMetricData";
  let body: any = {};
  const wrappedBody: any = {
    GetLoadBalancerMetricDataRequest: serializeAws_json1_1GetLoadBalancerMetricDataRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetLoadBalancerMetricData",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand(
  input: GetLoadBalancerTlsCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetLoadBalancerTlsCertificates";
  let body: any = {};
  const wrappedBody: any = {
    GetLoadBalancerTlsCertificatesRequest: serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetLoadBalancerTlsCertificates",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetLoadBalancersCommand(
  input: GetLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetLoadBalancers";
  let body: any = {};
  const wrappedBody: any = {
    GetLoadBalancersRequest: serializeAws_json1_1GetLoadBalancersRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetLoadBalancers",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetOperationCommand(
  input: GetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetOperation";
  let body: any = {};
  const wrappedBody: any = {
    GetOperationRequest: serializeAws_json1_1GetOperationRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetOperation",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetOperationsCommand(
  input: GetOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetOperations";
  let body: any = {};
  const wrappedBody: any = {
    GetOperationsRequest: serializeAws_json1_1GetOperationsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetOperations",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetOperationsForResourceCommand(
  input: GetOperationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetOperationsForResource";
  let body: any = {};
  const wrappedBody: any = {
    GetOperationsForResourceRequest: serializeAws_json1_1GetOperationsForResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetOperationsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRegionsCommand(
  input: GetRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetRegions";
  let body: any = {};
  const wrappedBody: any = {
    GetRegionsRequest: serializeAws_json1_1GetRegionsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRegions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseCommand(
  input: GetRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabase";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseRequest: serializeAws_json1_1GetRelationalDatabaseRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabase",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand(
  input: GetRelationalDatabaseBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.GetRelationalDatabaseBlueprints";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseBlueprintsRequest: serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabaseBlueprints",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseBundlesCommand(
  input: GetRelationalDatabaseBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabaseBundles";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseBundlesRequest: serializeAws_json1_1GetRelationalDatabaseBundlesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabaseBundles",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseEventsCommand(
  input: GetRelationalDatabaseEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabaseEvents";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseEventsRequest: serializeAws_json1_1GetRelationalDatabaseEventsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabaseEvents",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseLogEventsCommand(
  input: GetRelationalDatabaseLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabaseLogEvents";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseLogEventsRequest: serializeAws_json1_1GetRelationalDatabaseLogEventsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabaseLogEvents",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand(
  input: GetRelationalDatabaseLogStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.GetRelationalDatabaseLogStreams";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseLogStreamsRequest: serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabaseLogStreams",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand(
  input: GetRelationalDatabaseMasterUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.GetRelationalDatabaseMasterUserPassword";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseMasterUserPasswordRequest: serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabaseMasterUserPassword",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseMetricDataCommand(
  input: GetRelationalDatabaseMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.GetRelationalDatabaseMetricData";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseMetricDataRequest: serializeAws_json1_1GetRelationalDatabaseMetricDataRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabaseMetricData",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseParametersCommand(
  input: GetRelationalDatabaseParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.GetRelationalDatabaseParameters";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseParametersRequest: serializeAws_json1_1GetRelationalDatabaseParametersRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabaseParameters",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseSnapshotCommand(
  input: GetRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabaseSnapshot";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseSnapshotRequest: serializeAws_json1_1GetRelationalDatabaseSnapshotRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabaseSnapshot",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand(
  input: GetRelationalDatabaseSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabaseSnapshots";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabaseSnapshotsRequest: serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabaseSnapshots",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRelationalDatabasesCommand(
  input: GetRelationalDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetRelationalDatabases";
  let body: any = {};
  const wrappedBody: any = {
    GetRelationalDatabasesRequest: serializeAws_json1_1GetRelationalDatabasesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRelationalDatabases",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetStaticIpCommand(
  input: GetStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetStaticIp";
  let body: any = {};
  const wrappedBody: any = {
    GetStaticIpRequest: serializeAws_json1_1GetStaticIpRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetStaticIp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetStaticIpsCommand(
  input: GetStaticIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.GetStaticIps";
  let body: any = {};
  const wrappedBody: any = {
    GetStaticIpsRequest: serializeAws_json1_1GetStaticIpsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetStaticIps",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ImportKeyPairCommand(
  input: ImportKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.ImportKeyPair";
  let body: any = {};
  const wrappedBody: any = {
    ImportKeyPairRequest: serializeAws_json1_1ImportKeyPairRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ImportKeyPair",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1IsVpcPeeredCommand(
  input: IsVpcPeeredCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.IsVpcPeered";
  let body: any = {};
  const wrappedBody: any = {
    IsVpcPeeredRequest: serializeAws_json1_1IsVpcPeeredRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/IsVpcPeered",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1OpenInstancePublicPortsCommand(
  input: OpenInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.OpenInstancePublicPorts";
  let body: any = {};
  const wrappedBody: any = {
    OpenInstancePublicPortsRequest: serializeAws_json1_1OpenInstancePublicPortsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/OpenInstancePublicPorts",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PeerVpcCommand(
  input: PeerVpcCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.PeerVpc";
  let body: any = {};
  const wrappedBody: any = {
    PeerVpcRequest: serializeAws_json1_1PeerVpcRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PeerVpc",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutInstancePublicPortsCommand(
  input: PutInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.PutInstancePublicPorts";
  let body: any = {};
  const wrappedBody: any = {
    PutInstancePublicPortsRequest: serializeAws_json1_1PutInstancePublicPortsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutInstancePublicPorts",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RebootInstanceCommand(
  input: RebootInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.RebootInstance";
  let body: any = {};
  const wrappedBody: any = {
    RebootInstanceRequest: serializeAws_json1_1RebootInstanceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RebootInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RebootRelationalDatabaseCommand(
  input: RebootRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.RebootRelationalDatabase";
  let body: any = {};
  const wrappedBody: any = {
    RebootRelationalDatabaseRequest: serializeAws_json1_1RebootRelationalDatabaseRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RebootRelationalDatabase",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ReleaseStaticIpCommand(
  input: ReleaseStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.ReleaseStaticIp";
  let body: any = {};
  const wrappedBody: any = {
    ReleaseStaticIpRequest: serializeAws_json1_1ReleaseStaticIpRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ReleaseStaticIp",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartInstanceCommand(
  input: StartInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.StartInstance";
  let body: any = {};
  const wrappedBody: any = {
    StartInstanceRequest: serializeAws_json1_1StartInstanceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartRelationalDatabaseCommand(
  input: StartRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.StartRelationalDatabase";
  let body: any = {};
  const wrappedBody: any = {
    StartRelationalDatabaseRequest: serializeAws_json1_1StartRelationalDatabaseRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartRelationalDatabase",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopInstanceCommand(
  input: StopInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.StopInstance";
  let body: any = {};
  const wrappedBody: any = {
    StopInstanceRequest: serializeAws_json1_1StopInstanceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopRelationalDatabaseCommand(
  input: StopRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.StopRelationalDatabase";
  let body: any = {};
  const wrappedBody: any = {
    StopRelationalDatabaseRequest: serializeAws_json1_1StopRelationalDatabaseRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopRelationalDatabase",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceRequest: serializeAws_json1_1TagResourceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UnpeerVpcCommand(
  input: UnpeerVpcCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.UnpeerVpc";
  let body: any = {};
  const wrappedBody: any = {
    UnpeerVpcRequest: serializeAws_json1_1UnpeerVpcRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UnpeerVpc",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceRequest: serializeAws_json1_1UntagResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateDomainEntryCommand(
  input: UpdateDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.UpdateDomainEntry";
  let body: any = {};
  const wrappedBody: any = {
    UpdateDomainEntryRequest: serializeAws_json1_1UpdateDomainEntryRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateDomainEntry",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateLoadBalancerAttributeCommand(
  input: UpdateLoadBalancerAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.UpdateLoadBalancerAttribute";
  let body: any = {};
  const wrappedBody: any = {
    UpdateLoadBalancerAttributeRequest: serializeAws_json1_1UpdateLoadBalancerAttributeRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateLoadBalancerAttribute",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateRelationalDatabaseCommand(
  input: UpdateRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Lightsail_20161128.UpdateRelationalDatabase";
  let body: any = {};
  const wrappedBody: any = {
    UpdateRelationalDatabaseRequest: serializeAws_json1_1UpdateRelationalDatabaseRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateRelationalDatabase",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateRelationalDatabaseParametersCommand(
  input: UpdateRelationalDatabaseParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Lightsail_20161128.UpdateRelationalDatabaseParameters";
  let body: any = {};
  const wrappedBody: any = {
    UpdateRelationalDatabaseParametersRequest: serializeAws_json1_1UpdateRelationalDatabaseParametersRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateRelationalDatabaseParameters",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1AllocateStaticIpCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateStaticIpCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AllocateStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AllocateStaticIpResult(
    data.AllocateStaticIpResult,
    context
  );
  const response: AllocateStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AllocateStaticIpResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AllocateStaticIpCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateStaticIpCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1AttachDiskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachDiskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachDiskResult(
    data.AttachDiskResult,
    context
  );
  const response: AttachDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachDiskResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AttachDiskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachDiskCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1AttachInstancesToLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesToLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachInstancesToLoadBalancerResult(
    data.AttachInstancesToLoadBalancerResult,
    context
  );
  const response: AttachInstancesToLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachInstancesToLoadBalancerResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesToLoadBalancerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTlsCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult(
    data.AttachLoadBalancerTlsCertificateResult,
    context
  );
  const response: AttachLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachLoadBalancerTlsCertificateResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTlsCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1AttachStaticIpCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachStaticIpCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachStaticIpResult(
    data.AttachStaticIpResult,
    context
  );
  const response: AttachStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachStaticIpResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AttachStaticIpCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachStaticIpCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CloseInstancePublicPortsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseInstancePublicPortsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CloseInstancePublicPortsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CloseInstancePublicPortsResult(
    data.CloseInstancePublicPortsResult,
    context
  );
  const response: CloseInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CloseInstancePublicPortsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CloseInstancePublicPortsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseInstancePublicPortsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CopySnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CopySnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopySnapshotResult(
    data.CopySnapshotResult,
    context
  );
  const response: CopySnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopySnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CopySnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateCloudFormationStackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationStackCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCloudFormationStackCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCloudFormationStackResult(
    data.CreateCloudFormationStackResult,
    context
  );
  const response: CreateCloudFormationStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCloudFormationStackResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCloudFormationStackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationStackCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateDiskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDiskResult(
    data.CreateDiskResult,
    context
  );
  const response: CreateDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDiskResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDiskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateDiskFromSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskFromSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDiskFromSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDiskFromSnapshotResult(
    data.CreateDiskFromSnapshotResult,
    context
  );
  const response: CreateDiskFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDiskFromSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDiskFromSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskFromSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateDiskSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDiskSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDiskSnapshotResult(
    data.CreateDiskSnapshotResult,
    context
  );
  const response: CreateDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDiskSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDiskSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDomainResult(
    data.CreateDomainResult,
    context
  );
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDomainResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateDomainEntryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainEntryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDomainEntryResult(
    data.CreateDomainEntryResult,
    context
  );
  const response: CreateDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDomainEntryResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDomainEntryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainEntryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateInstanceSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateInstanceSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstanceSnapshotResult(
    data.CreateInstanceSnapshotResult,
    context
  );
  const response: CreateInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInstanceSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateInstanceSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstancesResult(
    data.CreateInstancesResult,
    context
  );
  const response: CreateInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInstancesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateInstancesFromSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesFromSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateInstancesFromSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstancesFromSnapshotResult(
    data.CreateInstancesFromSnapshotResult,
    context
  );
  const response: CreateInstancesFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInstancesFromSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateInstancesFromSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesFromSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateKeyPairCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyPairCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateKeyPairResult(
    data.CreateKeyPairResult,
    context
  );
  const response: CreateKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateKeyPairResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateKeyPairCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyPairCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLoadBalancerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLoadBalancerResult(
    data.CreateLoadBalancerResult,
    context
  );
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLoadBalancerResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerTlsCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult(
    data.CreateLoadBalancerTlsCertificateResult,
    context
  );
  const response: CreateLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLoadBalancerTlsCertificateResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerTlsCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateRelationalDatabaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRelationalDatabaseCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRelationalDatabaseResult(
    data.CreateRelationalDatabaseResult,
    context
  );
  const response: CreateRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRelationalDatabaseResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateRelationalDatabaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult(
    data.CreateRelationalDatabaseFromSnapshotResult,
    context
  );
  const response: CreateRelationalDatabaseFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRelationalDatabaseFromSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult(
    data.CreateRelationalDatabaseSnapshotResult,
    context
  );
  const response: CreateRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRelationalDatabaseSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteAutoSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAutoSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAutoSnapshotResult(
    data.DeleteAutoSnapshotResult,
    context
  );
  const response: DeleteAutoSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAutoSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteAutoSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteDiskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDiskResult(
    data.DeleteDiskResult,
    context
  );
  const response: DeleteDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDiskResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDiskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteDiskSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDiskSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDiskSnapshotResult(
    data.DeleteDiskSnapshotResult,
    context
  );
  const response: DeleteDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDiskSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDiskSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDomainResult(
    data.DeleteDomainResult,
    context
  );
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDomainResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteDomainEntryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainEntryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDomainEntryResult(
    data.DeleteDomainEntryResult,
    context
  );
  const response: DeleteDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDomainEntryResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDomainEntryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainEntryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInstanceResult(
    data.DeleteInstanceResult,
    context
  );
  const response: DeleteInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteInstanceSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteInstanceSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInstanceSnapshotResult(
    data.DeleteInstanceSnapshotResult,
    context
  );
  const response: DeleteInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInstanceSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteInstanceSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteKeyPairCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyPairCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteKeyPairResult(
    data.DeleteKeyPairResult,
    context
  );
  const response: DeleteKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteKeyPairResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteKeyPairCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyPairCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteKnownHostKeysCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnownHostKeysCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteKnownHostKeysCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteKnownHostKeysResult(
    data.DeleteKnownHostKeysResult,
    context
  );
  const response: DeleteKnownHostKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteKnownHostKeysResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteKnownHostKeysCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnownHostKeysCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLoadBalancerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLoadBalancerResult(
    data.DeleteLoadBalancerResult,
    context
  );
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLoadBalancerResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerTlsCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult(
    data.DeleteLoadBalancerTlsCertificateResult,
    context
  );
  const response: DeleteLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLoadBalancerTlsCertificateResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerTlsCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteRelationalDatabaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRelationalDatabaseCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRelationalDatabaseResult(
    data.DeleteRelationalDatabaseResult,
    context
  );
  const response: DeleteRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRelationalDatabaseResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteRelationalDatabaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult(
    data.DeleteRelationalDatabaseSnapshotResult,
    context
  );
  const response: DeleteRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRelationalDatabaseSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DetachDiskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachDiskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetachDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachDiskResult(
    data.DetachDiskResult,
    context
  );
  const response: DetachDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachDiskResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DetachDiskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachDiskCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesFromLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachInstancesFromLoadBalancerResult(
    data.DetachInstancesFromLoadBalancerResult,
    context
  );
  const response: DetachInstancesFromLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachInstancesFromLoadBalancerResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesFromLoadBalancerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DetachStaticIpCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachStaticIpCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetachStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachStaticIpResult(
    data.DetachStaticIpResult,
    context
  );
  const response: DetachStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachStaticIpResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DetachStaticIpCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachStaticIpCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DisableAddOnCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAddOnCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableAddOnCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableAddOnResult(
    data.DisableAddOnResult,
    context
  );
  const response: DisableAddOnCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableAddOnResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisableAddOnCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAddOnCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DownloadDefaultKeyPairCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDefaultKeyPairCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DownloadDefaultKeyPairCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DownloadDefaultKeyPairResult(
    data.DownloadDefaultKeyPairResult,
    context
  );
  const response: DownloadDefaultKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DownloadDefaultKeyPairResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DownloadDefaultKeyPairCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDefaultKeyPairCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1EnableAddOnCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAddOnCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableAddOnCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableAddOnResult(
    data.EnableAddOnResult,
    context
  );
  const response: EnableAddOnCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableAddOnResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnableAddOnCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAddOnCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ExportSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ExportSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportSnapshotResult(
    data.ExportSnapshotResult,
    context
  );
  const response: ExportSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExportSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ExportSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetActiveNamesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActiveNamesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetActiveNamesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetActiveNamesResult(
    data.GetActiveNamesResult,
    context
  );
  const response: GetActiveNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetActiveNamesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetActiveNamesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActiveNamesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetAutoSnapshotsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoSnapshotsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAutoSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAutoSnapshotsResult(
    data.GetAutoSnapshotsResult,
    context
  );
  const response: GetAutoSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAutoSnapshotsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAutoSnapshotsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoSnapshotsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetBlueprintsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlueprintsResult(
    data.GetBlueprintsResult,
    context
  );
  const response: GetBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBlueprintsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetBlueprintsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetBundlesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBundlesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBundlesResult(
    data.GetBundlesResult,
    context
  );
  const response: GetBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBundlesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetBundlesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBundlesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetCloudFormationStackRecordsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationStackRecordsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCloudFormationStackRecordsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCloudFormationStackRecordsResult(
    data.GetCloudFormationStackRecordsResult,
    context
  );
  const response: GetCloudFormationStackRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCloudFormationStackRecordsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCloudFormationStackRecordsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationStackRecordsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDiskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiskResult(data.GetDiskResult, context);
  const response: GetDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDiskResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDiskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDiskSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDiskSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiskSnapshotResult(
    data.GetDiskSnapshotResult,
    context
  );
  const response: GetDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDiskSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDiskSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDiskSnapshotsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDiskSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiskSnapshotsResult(
    data.GetDiskSnapshotsResult,
    context
  );
  const response: GetDiskSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDiskSnapshotsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDiskSnapshotsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDisksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDisksCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDisksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDisksResult(data.GetDisksResult, context);
  const response: GetDisksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDisksResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDisksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDisksCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDomainResult(
    data.GetDomainResult,
    context
  );
  const response: GetDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDomainsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDomainsResult(
    data.GetDomainsResult,
    context
  );
  const response: GetDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDomainsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetExportSnapshotRecordsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportSnapshotRecordsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetExportSnapshotRecordsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetExportSnapshotRecordsResult(
    data.GetExportSnapshotRecordsResult,
    context
  );
  const response: GetExportSnapshotRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetExportSnapshotRecordsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetExportSnapshotRecordsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportSnapshotRecordsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceResult(
    data.GetInstanceResult,
    context
  );
  const response: GetInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetInstanceAccessDetailsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceAccessDetailsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceAccessDetailsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceAccessDetailsResult(
    data.GetInstanceAccessDetailsResult,
    context
  );
  const response: GetInstanceAccessDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceAccessDetailsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstanceAccessDetailsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceAccessDetailsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetInstanceMetricDataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceMetricDataCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceMetricDataCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceMetricDataResult(
    data.GetInstanceMetricDataResult,
    context
  );
  const response: GetInstanceMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceMetricDataResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstanceMetricDataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceMetricDataCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetInstancePortStatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancePortStatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstancePortStatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstancePortStatesResult(
    data.GetInstancePortStatesResult,
    context
  );
  const response: GetInstancePortStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstancePortStatesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstancePortStatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancePortStatesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetInstanceSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceSnapshotResult(
    data.GetInstanceSnapshotResult,
    context
  );
  const response: GetInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstanceSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetInstanceSnapshotsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceSnapshotsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceSnapshotsResult(
    data.GetInstanceSnapshotsResult,
    context
  );
  const response: GetInstanceSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceSnapshotsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstanceSnapshotsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetInstanceStateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceStateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceStateResult(
    data.GetInstanceStateResult,
    context
  );
  const response: GetInstanceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceStateResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstanceStateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceStateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstancesResult(
    data.GetInstancesResult,
    context
  );
  const response: GetInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstancesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetKeyPairCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyPairResult(
    data.GetKeyPairResult,
    context
  );
  const response: GetKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetKeyPairResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetKeyPairCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetKeyPairsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetKeyPairsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyPairsResult(
    data.GetKeyPairsResult,
    context
  );
  const response: GetKeyPairsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetKeyPairsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetKeyPairsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetLoadBalancerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancerResult(
    data.GetLoadBalancerResult,
    context
  );
  const response: GetLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLoadBalancerResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetLoadBalancerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetLoadBalancerMetricDataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerMetricDataCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLoadBalancerMetricDataCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancerMetricDataResult(
    data.GetLoadBalancerMetricDataResult,
    context
  );
  const response: GetLoadBalancerMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLoadBalancerMetricDataResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetLoadBalancerMetricDataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerMetricDataCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerTlsCertificatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult(
    data.GetLoadBalancerTlsCertificatesResult,
    context
  );
  const response: GetLoadBalancerTlsCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLoadBalancerTlsCertificatesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerTlsCertificatesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetLoadBalancersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancersResult(
    data.GetLoadBalancersResult,
    context
  );
  const response: GetLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLoadBalancersResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetLoadBalancersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetOperationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationResult(
    data.GetOperationResult,
    context
  );
  const response: GetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOperationResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetOperationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetOperationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationsResult(
    data.GetOperationsResult,
    context
  );
  const response: GetOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOperationsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetOperationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetOperationsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOperationsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationsForResourceResult(
    data.GetOperationsForResourceResult,
    context
  );
  const response: GetOperationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOperationsForResourceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetOperationsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRegionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRegionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegionsResult(
    data.GetRegionsResult,
    context
  );
  const response: GetRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRegionsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRegionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseResult(
    data.GetRelationalDatabaseResult,
    context
  );
  const response: GetRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBlueprintsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult(
    data.GetRelationalDatabaseBlueprintsResult,
    context
  );
  const response: GetRelationalDatabaseBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseBlueprintsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBlueprintsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseBundlesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBundlesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseBundlesResult(
    data.GetRelationalDatabaseBundlesResult,
    context
  );
  const response: GetRelationalDatabaseBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseBundlesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBundlesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseEventsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseEventsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseEventsResult(
    data.GetRelationalDatabaseEventsResult,
    context
  );
  const response: GetRelationalDatabaseEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseEventsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseEventsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogEventsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseLogEventsResult(
    data.GetRelationalDatabaseLogEventsResult,
    context
  );
  const response: GetRelationalDatabaseLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseLogEventsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogEventsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogStreamsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult(
    data.GetRelationalDatabaseLogStreamsResult,
    context
  );
  const response: GetRelationalDatabaseLogStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseLogStreamsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogStreamsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult(
    data.GetRelationalDatabaseMasterUserPasswordResult,
    context
  );
  const response: GetRelationalDatabaseMasterUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseMasterUserPasswordResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMetricDataCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseMetricDataResult(
    data.GetRelationalDatabaseMetricDataResult,
    context
  );
  const response: GetRelationalDatabaseMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseMetricDataResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMetricDataCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseParametersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseParametersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseParametersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseParametersResult(
    data.GetRelationalDatabaseParametersResult,
    context
  );
  const response: GetRelationalDatabaseParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseParametersResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseParametersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseParametersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseSnapshotResult(
    data.GetRelationalDatabaseSnapshotResult,
    context
  );
  const response: GetRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseSnapshotResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult(
    data.GetRelationalDatabaseSnapshotsResult,
    context
  );
  const response: GetRelationalDatabaseSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabaseSnapshotsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRelationalDatabasesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabasesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRelationalDatabasesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabasesResult(
    data.GetRelationalDatabasesResult,
    context
  );
  const response: GetRelationalDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRelationalDatabasesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRelationalDatabasesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabasesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetStaticIpCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStaticIpResult(
    data.GetStaticIpResult,
    context
  );
  const response: GetStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetStaticIpResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetStaticIpCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetStaticIpsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetStaticIpsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStaticIpsResult(
    data.GetStaticIpsResult,
    context
  );
  const response: GetStaticIpsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetStaticIpsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetStaticIpsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ImportKeyPairCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyPairCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportKeyPairResult(
    data.ImportKeyPairResult,
    context
  );
  const response: ImportKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportKeyPairResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportKeyPairCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyPairCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1IsVpcPeeredCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsVpcPeeredCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1IsVpcPeeredCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IsVpcPeeredResult(
    data.IsVpcPeeredResult,
    context
  );
  const response: IsVpcPeeredCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IsVpcPeeredResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1IsVpcPeeredCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsVpcPeeredCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1OpenInstancePublicPortsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenInstancePublicPortsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1OpenInstancePublicPortsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1OpenInstancePublicPortsResult(
    data.OpenInstancePublicPortsResult,
    context
  );
  const response: OpenInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "OpenInstancePublicPortsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1OpenInstancePublicPortsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenInstancePublicPortsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PeerVpcCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PeerVpcCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PeerVpcCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PeerVpcResult(data.PeerVpcResult, context);
  const response: PeerVpcCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PeerVpcResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PeerVpcCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PeerVpcCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutInstancePublicPortsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInstancePublicPortsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutInstancePublicPortsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutInstancePublicPortsResult(
    data.PutInstancePublicPortsResult,
    context
  );
  const response: PutInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutInstancePublicPortsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutInstancePublicPortsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInstancePublicPortsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RebootInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RebootInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootInstanceResult(
    data.RebootInstanceResult,
    context
  );
  const response: RebootInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebootInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RebootInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RebootRelationalDatabaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootRelationalDatabaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RebootRelationalDatabaseCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootRelationalDatabaseResult(
    data.RebootRelationalDatabaseResult,
    context
  );
  const response: RebootRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebootRelationalDatabaseResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RebootRelationalDatabaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootRelationalDatabaseCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ReleaseStaticIpCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseStaticIpCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ReleaseStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReleaseStaticIpResult(
    data.ReleaseStaticIpResult,
    context
  );
  const response: ReleaseStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReleaseStaticIpResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ReleaseStaticIpCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseStaticIpCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartInstanceResult(
    data.StartInstanceResult,
    context
  );
  const response: StartInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartRelationalDatabaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRelationalDatabaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartRelationalDatabaseCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartRelationalDatabaseResult(
    data.StartRelationalDatabaseResult,
    context
  );
  const response: StartRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartRelationalDatabaseResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartRelationalDatabaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRelationalDatabaseCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StopInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopInstanceResult(
    data.StopInstanceResult,
    context
  );
  const response: StopInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StopRelationalDatabaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRelationalDatabaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopRelationalDatabaseCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopRelationalDatabaseResult(
    data.StopRelationalDatabaseResult,
    context
  );
  const response: StopRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopRelationalDatabaseResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopRelationalDatabaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRelationalDatabaseCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResult(
    data.TagResourceResult,
    context
  );
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UnpeerVpcCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnpeerVpcCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UnpeerVpcCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UnpeerVpcResult(
    data.UnpeerVpcResult,
    context
  );
  const response: UnpeerVpcCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UnpeerVpcResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UnpeerVpcCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnpeerVpcCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResult(
    data.UntagResourceResult,
    context
  );
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateDomainEntryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEntryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDomainEntryResult(
    data.UpdateDomainEntryResult,
    context
  );
  const response: UpdateDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDomainEntryResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDomainEntryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEntryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateLoadBalancerAttributeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoadBalancerAttributeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLoadBalancerAttributeResult(
    data.UpdateLoadBalancerAttributeResult,
    context
  );
  const response: UpdateLoadBalancerAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLoadBalancerAttributeResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoadBalancerAttributeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateRelationalDatabaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRelationalDatabaseCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRelationalDatabaseResult(
    data.UpdateRelationalDatabaseResult,
    context
  );
  const response: UpdateRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRelationalDatabaseResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateRelationalDatabaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseParametersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRelationalDatabaseParametersResult(
    data.UpdateRelationalDatabaseParametersResult,
    context
  );
  const response: UpdateRelationalDatabaseParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRelationalDatabaseParametersResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseParametersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      response = await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      response = await deserializeAws_json1_1OperationFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      response = await deserializeAws_json1_1UnauthenticatedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.lightsail#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    output.body,
    context
  );
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AccountSetupInProgressExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccountSetupInProgressException> => {
  const deserialized: any = deserializeAws_json1_1AccountSetupInProgressException(
    output.body,
    context
  );
  const contents: AccountSetupInProgressException = {
    __type: "AccountSetupInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    output.body,
    context
  );
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const deserialized: any = deserializeAws_json1_1NotFoundException(
    output.body,
    context
  );
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OperationFailureException> => {
  const deserialized: any = deserializeAws_json1_1OperationFailureException(
    output.body,
    context
  );
  const contents: OperationFailureException = {
    __type: "OperationFailureException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const deserialized: any = deserializeAws_json1_1ServiceException(
    output.body,
    context
  );
  const contents: ServiceException = {
    __type: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnauthenticatedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthenticatedException> => {
  const deserialized: any = deserializeAws_json1_1UnauthenticatedException(
    output.body,
    context
  );
  const contents: UnauthenticatedException = {
    __type: "UnauthenticatedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddOnRequest = (
  input: AddOnRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.addOnType !== undefined) {
    bodyParams["addOnType"] = input.addOnType;
  }
  if (input.autoSnapshotAddOnRequest !== undefined) {
    bodyParams[
      "autoSnapshotAddOnRequest"
    ] = serializeAws_json1_1AutoSnapshotAddOnRequest(
      input.autoSnapshotAddOnRequest,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AddOnRequestList = (
  input: Array<AddOnRequest>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1AddOnRequest(entry, context)
  );
};

const serializeAws_json1_1AllocateStaticIpRequest = (
  input: AllocateStaticIpRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.staticIpName !== undefined) {
    bodyParams["staticIpName"] = input.staticIpName;
  }
  return bodyParams;
};

const serializeAws_json1_1AttachDiskRequest = (
  input: AttachDiskRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.diskName !== undefined) {
    bodyParams["diskName"] = input.diskName;
  }
  if (input.diskPath !== undefined) {
    bodyParams["diskPath"] = input.diskPath;
  }
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1AttachInstancesToLoadBalancerRequest = (
  input: AttachInstancesToLoadBalancerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceNames !== undefined) {
    bodyParams["instanceNames"] = serializeAws_json1_1ResourceNameList(
      input.instanceNames,
      context
    );
  }
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  return bodyParams;
};

const serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest = (
  input: AttachLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.certificateName !== undefined) {
    bodyParams["certificateName"] = input.certificateName;
  }
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  return bodyParams;
};

const serializeAws_json1_1AttachStaticIpRequest = (
  input: AttachStaticIpRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  if (input.staticIpName !== undefined) {
    bodyParams["staticIpName"] = input.staticIpName;
  }
  return bodyParams;
};

const serializeAws_json1_1AttachedDiskMap = (
  input: { [key: string]: Array<DiskMap> },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1DiskMapList(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_1AutoSnapshotAddOnRequest = (
  input: AutoSnapshotAddOnRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.snapshotTimeOfDay !== undefined) {
    bodyParams["snapshotTimeOfDay"] = input.snapshotTimeOfDay;
  }
  return bodyParams;
};

const serializeAws_json1_1CloseInstancePublicPortsRequest = (
  input: CloseInstancePublicPortsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  if (input.portInfo !== undefined) {
    bodyParams["portInfo"] = serializeAws_json1_1PortInfo(
      input.portInfo,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CopySnapshotRequest = (
  input: CopySnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.restoreDate !== undefined) {
    bodyParams["restoreDate"] = input.restoreDate;
  }
  if (input.sourceRegion !== undefined) {
    bodyParams["sourceRegion"] = input.sourceRegion;
  }
  if (input.sourceResourceName !== undefined) {
    bodyParams["sourceResourceName"] = input.sourceResourceName;
  }
  if (input.sourceSnapshotName !== undefined) {
    bodyParams["sourceSnapshotName"] = input.sourceSnapshotName;
  }
  if (input.targetSnapshotName !== undefined) {
    bodyParams["targetSnapshotName"] = input.targetSnapshotName;
  }
  if (input.useLatestRestorableAutoSnapshot !== undefined) {
    bodyParams["useLatestRestorableAutoSnapshot"] =
      input.useLatestRestorableAutoSnapshot;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCloudFormationStackRequest = (
  input: CreateCloudFormationStackRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instances !== undefined) {
    bodyParams["instances"] = serializeAws_json1_1InstanceEntryList(
      input.instances,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDiskFromSnapshotRequest = (
  input: CreateDiskFromSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.addOns !== undefined) {
    bodyParams["addOns"] = serializeAws_json1_1AddOnRequestList(
      input.addOns,
      context
    );
  }
  if (input.availabilityZone !== undefined) {
    bodyParams["availabilityZone"] = input.availabilityZone;
  }
  if (input.diskName !== undefined) {
    bodyParams["diskName"] = input.diskName;
  }
  if (input.diskSnapshotName !== undefined) {
    bodyParams["diskSnapshotName"] = input.diskSnapshotName;
  }
  if (input.restoreDate !== undefined) {
    bodyParams["restoreDate"] = input.restoreDate;
  }
  if (input.sizeInGb !== undefined) {
    bodyParams["sizeInGb"] = input.sizeInGb;
  }
  if (input.sourceDiskName !== undefined) {
    bodyParams["sourceDiskName"] = input.sourceDiskName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  if (input.useLatestRestorableAutoSnapshot !== undefined) {
    bodyParams["useLatestRestorableAutoSnapshot"] =
      input.useLatestRestorableAutoSnapshot;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDiskRequest = (
  input: CreateDiskRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.addOns !== undefined) {
    bodyParams["addOns"] = serializeAws_json1_1AddOnRequestList(
      input.addOns,
      context
    );
  }
  if (input.availabilityZone !== undefined) {
    bodyParams["availabilityZone"] = input.availabilityZone;
  }
  if (input.diskName !== undefined) {
    bodyParams["diskName"] = input.diskName;
  }
  if (input.sizeInGb !== undefined) {
    bodyParams["sizeInGb"] = input.sizeInGb;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDiskSnapshotRequest = (
  input: CreateDiskSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.diskName !== undefined) {
    bodyParams["diskName"] = input.diskName;
  }
  if (input.diskSnapshotName !== undefined) {
    bodyParams["diskSnapshotName"] = input.diskSnapshotName;
  }
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDomainEntryRequest = (
  input: CreateDomainEntryRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domainEntry !== undefined) {
    bodyParams["domainEntry"] = serializeAws_json1_1DomainEntry(
      input.domainEntry,
      context
    );
  }
  if (input.domainName !== undefined) {
    bodyParams["domainName"] = input.domainName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDomainRequest = (
  input: CreateDomainRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domainName !== undefined) {
    bodyParams["domainName"] = input.domainName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateInstanceSnapshotRequest = (
  input: CreateInstanceSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  if (input.instanceSnapshotName !== undefined) {
    bodyParams["instanceSnapshotName"] = input.instanceSnapshotName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateInstancesFromSnapshotRequest = (
  input: CreateInstancesFromSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.addOns !== undefined) {
    bodyParams["addOns"] = serializeAws_json1_1AddOnRequestList(
      input.addOns,
      context
    );
  }
  if (input.attachedDiskMapping !== undefined) {
    bodyParams["attachedDiskMapping"] = serializeAws_json1_1AttachedDiskMap(
      input.attachedDiskMapping,
      context
    );
  }
  if (input.availabilityZone !== undefined) {
    bodyParams["availabilityZone"] = input.availabilityZone;
  }
  if (input.bundleId !== undefined) {
    bodyParams["bundleId"] = input.bundleId;
  }
  if (input.instanceNames !== undefined) {
    bodyParams["instanceNames"] = serializeAws_json1_1StringList(
      input.instanceNames,
      context
    );
  }
  if (input.instanceSnapshotName !== undefined) {
    bodyParams["instanceSnapshotName"] = input.instanceSnapshotName;
  }
  if (input.keyPairName !== undefined) {
    bodyParams["keyPairName"] = input.keyPairName;
  }
  if (input.restoreDate !== undefined) {
    bodyParams["restoreDate"] = input.restoreDate;
  }
  if (input.sourceInstanceName !== undefined) {
    bodyParams["sourceInstanceName"] = input.sourceInstanceName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  if (input.useLatestRestorableAutoSnapshot !== undefined) {
    bodyParams["useLatestRestorableAutoSnapshot"] =
      input.useLatestRestorableAutoSnapshot;
  }
  if (input.userData !== undefined) {
    bodyParams["userData"] = input.userData;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateInstancesRequest = (
  input: CreateInstancesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.addOns !== undefined) {
    bodyParams["addOns"] = serializeAws_json1_1AddOnRequestList(
      input.addOns,
      context
    );
  }
  if (input.availabilityZone !== undefined) {
    bodyParams["availabilityZone"] = input.availabilityZone;
  }
  if (input.blueprintId !== undefined) {
    bodyParams["blueprintId"] = input.blueprintId;
  }
  if (input.bundleId !== undefined) {
    bodyParams["bundleId"] = input.bundleId;
  }
  if (input.customImageName !== undefined) {
    bodyParams["customImageName"] = input.customImageName;
  }
  if (input.instanceNames !== undefined) {
    bodyParams["instanceNames"] = serializeAws_json1_1StringList(
      input.instanceNames,
      context
    );
  }
  if (input.keyPairName !== undefined) {
    bodyParams["keyPairName"] = input.keyPairName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  if (input.userData !== undefined) {
    bodyParams["userData"] = input.userData;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateKeyPairRequest = (
  input: CreateKeyPairRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.keyPairName !== undefined) {
    bodyParams["keyPairName"] = input.keyPairName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateLoadBalancerRequest = (
  input: CreateLoadBalancerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.certificateAlternativeNames !== undefined) {
    bodyParams[
      "certificateAlternativeNames"
    ] = serializeAws_json1_1DomainNameList(
      input.certificateAlternativeNames,
      context
    );
  }
  if (input.certificateDomainName !== undefined) {
    bodyParams["certificateDomainName"] = input.certificateDomainName;
  }
  if (input.certificateName !== undefined) {
    bodyParams["certificateName"] = input.certificateName;
  }
  if (input.healthCheckPath !== undefined) {
    bodyParams["healthCheckPath"] = input.healthCheckPath;
  }
  if (input.instancePort !== undefined) {
    bodyParams["instancePort"] = input.instancePort;
  }
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest = (
  input: CreateLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.certificateAlternativeNames !== undefined) {
    bodyParams[
      "certificateAlternativeNames"
    ] = serializeAws_json1_1DomainNameList(
      input.certificateAlternativeNames,
      context
    );
  }
  if (input.certificateDomainName !== undefined) {
    bodyParams["certificateDomainName"] = input.certificateDomainName;
  }
  if (input.certificateName !== undefined) {
    bodyParams["certificateName"] = input.certificateName;
  }
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest = (
  input: CreateRelationalDatabaseFromSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.availabilityZone !== undefined) {
    bodyParams["availabilityZone"] = input.availabilityZone;
  }
  if (input.publiclyAccessible !== undefined) {
    bodyParams["publiclyAccessible"] = input.publiclyAccessible;
  }
  if (input.relationalDatabaseBundleId !== undefined) {
    bodyParams["relationalDatabaseBundleId"] = input.relationalDatabaseBundleId;
  }
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  if (input.relationalDatabaseSnapshotName !== undefined) {
    bodyParams["relationalDatabaseSnapshotName"] =
      input.relationalDatabaseSnapshotName;
  }
  if (input.restoreTime !== undefined) {
    bodyParams["restoreTime"] = Math.round(input.restoreTime.getTime() / 1000);
  }
  if (input.sourceRelationalDatabaseName !== undefined) {
    bodyParams["sourceRelationalDatabaseName"] =
      input.sourceRelationalDatabaseName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  if (input.useLatestRestorableTime !== undefined) {
    bodyParams["useLatestRestorableTime"] = input.useLatestRestorableTime;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRelationalDatabaseRequest = (
  input: CreateRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.availabilityZone !== undefined) {
    bodyParams["availabilityZone"] = input.availabilityZone;
  }
  if (input.masterDatabaseName !== undefined) {
    bodyParams["masterDatabaseName"] = input.masterDatabaseName;
  }
  if (input.masterUserPassword !== undefined) {
    bodyParams["masterUserPassword"] = input.masterUserPassword;
  }
  if (input.masterUsername !== undefined) {
    bodyParams["masterUsername"] = input.masterUsername;
  }
  if (input.preferredBackupWindow !== undefined) {
    bodyParams["preferredBackupWindow"] = input.preferredBackupWindow;
  }
  if (input.preferredMaintenanceWindow !== undefined) {
    bodyParams["preferredMaintenanceWindow"] = input.preferredMaintenanceWindow;
  }
  if (input.publiclyAccessible !== undefined) {
    bodyParams["publiclyAccessible"] = input.publiclyAccessible;
  }
  if (input.relationalDatabaseBlueprintId !== undefined) {
    bodyParams["relationalDatabaseBlueprintId"] =
      input.relationalDatabaseBlueprintId;
  }
  if (input.relationalDatabaseBundleId !== undefined) {
    bodyParams["relationalDatabaseBundleId"] = input.relationalDatabaseBundleId;
  }
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest = (
  input: CreateRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  if (input.relationalDatabaseSnapshotName !== undefined) {
    bodyParams["relationalDatabaseSnapshotName"] =
      input.relationalDatabaseSnapshotName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAutoSnapshotRequest = (
  input: DeleteAutoSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.date !== undefined) {
    bodyParams["date"] = input.date;
  }
  if (input.resourceName !== undefined) {
    bodyParams["resourceName"] = input.resourceName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDiskRequest = (
  input: DeleteDiskRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.diskName !== undefined) {
    bodyParams["diskName"] = input.diskName;
  }
  if (input.forceDeleteAddOns !== undefined) {
    bodyParams["forceDeleteAddOns"] = input.forceDeleteAddOns;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDiskSnapshotRequest = (
  input: DeleteDiskSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.diskSnapshotName !== undefined) {
    bodyParams["diskSnapshotName"] = input.diskSnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDomainEntryRequest = (
  input: DeleteDomainEntryRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domainEntry !== undefined) {
    bodyParams["domainEntry"] = serializeAws_json1_1DomainEntry(
      input.domainEntry,
      context
    );
  }
  if (input.domainName !== undefined) {
    bodyParams["domainName"] = input.domainName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDomainRequest = (
  input: DeleteDomainRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domainName !== undefined) {
    bodyParams["domainName"] = input.domainName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteInstanceRequest = (
  input: DeleteInstanceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.forceDeleteAddOns !== undefined) {
    bodyParams["forceDeleteAddOns"] = input.forceDeleteAddOns;
  }
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteInstanceSnapshotRequest = (
  input: DeleteInstanceSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceSnapshotName !== undefined) {
    bodyParams["instanceSnapshotName"] = input.instanceSnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteKeyPairRequest = (
  input: DeleteKeyPairRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.keyPairName !== undefined) {
    bodyParams["keyPairName"] = input.keyPairName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteKnownHostKeysRequest = (
  input: DeleteKnownHostKeysRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLoadBalancerRequest = (
  input: DeleteLoadBalancerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest = (
  input: DeleteLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.certificateName !== undefined) {
    bodyParams["certificateName"] = input.certificateName;
  }
  if (input.force !== undefined) {
    bodyParams["force"] = input.force;
  }
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRelationalDatabaseRequest = (
  input: DeleteRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.finalRelationalDatabaseSnapshotName !== undefined) {
    bodyParams["finalRelationalDatabaseSnapshotName"] =
      input.finalRelationalDatabaseSnapshotName;
  }
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  if (input.skipFinalSnapshot !== undefined) {
    bodyParams["skipFinalSnapshot"] = input.skipFinalSnapshot;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest = (
  input: DeleteRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.relationalDatabaseSnapshotName !== undefined) {
    bodyParams["relationalDatabaseSnapshotName"] =
      input.relationalDatabaseSnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1DetachDiskRequest = (
  input: DetachDiskRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.diskName !== undefined) {
    bodyParams["diskName"] = input.diskName;
  }
  return bodyParams;
};

const serializeAws_json1_1DetachInstancesFromLoadBalancerRequest = (
  input: DetachInstancesFromLoadBalancerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceNames !== undefined) {
    bodyParams["instanceNames"] = serializeAws_json1_1ResourceNameList(
      input.instanceNames,
      context
    );
  }
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DetachStaticIpRequest = (
  input: DetachStaticIpRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.staticIpName !== undefined) {
    bodyParams["staticIpName"] = input.staticIpName;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableAddOnRequest = (
  input: DisableAddOnRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.addOnType !== undefined) {
    bodyParams["addOnType"] = input.addOnType;
  }
  if (input.resourceName !== undefined) {
    bodyParams["resourceName"] = input.resourceName;
  }
  return bodyParams;
};

const serializeAws_json1_1DiskMap = (
  input: DiskMap,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.newDiskName !== undefined) {
    bodyParams["newDiskName"] = input.newDiskName;
  }
  if (input.originalDiskPath !== undefined) {
    bodyParams["originalDiskPath"] = input.originalDiskPath;
  }
  return bodyParams;
};

const serializeAws_json1_1DiskMapList = (
  input: Array<DiskMap>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1DiskMap(entry, context)
  );
};

const serializeAws_json1_1DomainEntry = (
  input: DomainEntry,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.isAlias !== undefined) {
    bodyParams["isAlias"] = input.isAlias;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.options !== undefined) {
    bodyParams["options"] = serializeAws_json1_1DomainEntryOptions(
      input.options,
      context
    );
  }
  if (input.target !== undefined) {
    bodyParams["target"] = input.target;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1DomainEntryOptions = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1DomainNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1DownloadDefaultKeyPairRequest = (
  input: DownloadDefaultKeyPairRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1EnableAddOnRequest = (
  input: EnableAddOnRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.addOnRequest !== undefined) {
    bodyParams["addOnRequest"] = serializeAws_json1_1AddOnRequest(
      input.addOnRequest,
      context
    );
  }
  if (input.resourceName !== undefined) {
    bodyParams["resourceName"] = input.resourceName;
  }
  return bodyParams;
};

const serializeAws_json1_1ExportSnapshotRequest = (
  input: ExportSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.sourceSnapshotName !== undefined) {
    bodyParams["sourceSnapshotName"] = input.sourceSnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetActiveNamesRequest = (
  input: GetActiveNamesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetAutoSnapshotsRequest = (
  input: GetAutoSnapshotsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceName !== undefined) {
    bodyParams["resourceName"] = input.resourceName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetBlueprintsRequest = (
  input: GetBlueprintsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.includeInactive !== undefined) {
    bodyParams["includeInactive"] = input.includeInactive;
  }
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetBundlesRequest = (
  input: GetBundlesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.includeInactive !== undefined) {
    bodyParams["includeInactive"] = input.includeInactive;
  }
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCloudFormationStackRecordsRequest = (
  input: GetCloudFormationStackRecordsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDiskRequest = (
  input: GetDiskRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.diskName !== undefined) {
    bodyParams["diskName"] = input.diskName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDiskSnapshotRequest = (
  input: GetDiskSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.diskSnapshotName !== undefined) {
    bodyParams["diskSnapshotName"] = input.diskSnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDiskSnapshotsRequest = (
  input: GetDiskSnapshotsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDisksRequest = (
  input: GetDisksRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDomainRequest = (
  input: GetDomainRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domainName !== undefined) {
    bodyParams["domainName"] = input.domainName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDomainsRequest = (
  input: GetDomainsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetExportSnapshotRecordsRequest = (
  input: GetExportSnapshotRecordsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInstanceAccessDetailsRequest = (
  input: GetInstanceAccessDetailsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  if (input.protocol !== undefined) {
    bodyParams["protocol"] = input.protocol;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInstanceMetricDataRequest = (
  input: GetInstanceMetricDataRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  if (input.metricName !== undefined) {
    bodyParams["metricName"] = input.metricName;
  }
  if (input.period !== undefined) {
    bodyParams["period"] = input.period;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  if (input.statistics !== undefined) {
    bodyParams["statistics"] = serializeAws_json1_1MetricStatisticList(
      input.statistics,
      context
    );
  }
  if (input.unit !== undefined) {
    bodyParams["unit"] = input.unit;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInstancePortStatesRequest = (
  input: GetInstancePortStatesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInstanceRequest = (
  input: GetInstanceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInstanceSnapshotRequest = (
  input: GetInstanceSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceSnapshotName !== undefined) {
    bodyParams["instanceSnapshotName"] = input.instanceSnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInstanceSnapshotsRequest = (
  input: GetInstanceSnapshotsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInstanceStateRequest = (
  input: GetInstanceStateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInstancesRequest = (
  input: GetInstancesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetKeyPairRequest = (
  input: GetKeyPairRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.keyPairName !== undefined) {
    bodyParams["keyPairName"] = input.keyPairName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetKeyPairsRequest = (
  input: GetKeyPairsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLoadBalancerMetricDataRequest = (
  input: GetLoadBalancerMetricDataRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  if (input.metricName !== undefined) {
    bodyParams["metricName"] = input.metricName;
  }
  if (input.period !== undefined) {
    bodyParams["period"] = input.period;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  if (input.statistics !== undefined) {
    bodyParams["statistics"] = serializeAws_json1_1MetricStatisticList(
      input.statistics,
      context
    );
  }
  if (input.unit !== undefined) {
    bodyParams["unit"] = input.unit;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLoadBalancerRequest = (
  input: GetLoadBalancerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest = (
  input: GetLoadBalancerTlsCertificatesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLoadBalancersRequest = (
  input: GetLoadBalancersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetOperationRequest = (
  input: GetOperationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.operationId !== undefined) {
    bodyParams["operationId"] = input.operationId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetOperationsForResourceRequest = (
  input: GetOperationsForResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  if (input.resourceName !== undefined) {
    bodyParams["resourceName"] = input.resourceName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetOperationsRequest = (
  input: GetOperationsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRegionsRequest = (
  input: GetRegionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.includeAvailabilityZones !== undefined) {
    bodyParams["includeAvailabilityZones"] = input.includeAvailabilityZones;
  }
  if (input.includeRelationalDatabaseAvailabilityZones !== undefined) {
    bodyParams["includeRelationalDatabaseAvailabilityZones"] =
      input.includeRelationalDatabaseAvailabilityZones;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest = (
  input: GetRelationalDatabaseBlueprintsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseBundlesRequest = (
  input: GetRelationalDatabaseBundlesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseEventsRequest = (
  input: GetRelationalDatabaseEventsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.durationInMinutes !== undefined) {
    bodyParams["durationInMinutes"] = input.durationInMinutes;
  }
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseLogEventsRequest = (
  input: GetRelationalDatabaseLogEventsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.logStreamName !== undefined) {
    bodyParams["logStreamName"] = input.logStreamName;
  }
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  if (input.startFromHead !== undefined) {
    bodyParams["startFromHead"] = input.startFromHead;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest = (
  input: GetRelationalDatabaseLogStreamsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest = (
  input: GetRelationalDatabaseMasterUserPasswordRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.passwordVersion !== undefined) {
    bodyParams["passwordVersion"] = input.passwordVersion;
  }
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseMetricDataRequest = (
  input: GetRelationalDatabaseMetricDataRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.metricName !== undefined) {
    bodyParams["metricName"] = input.metricName;
  }
  if (input.period !== undefined) {
    bodyParams["period"] = input.period;
  }
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  if (input.statistics !== undefined) {
    bodyParams["statistics"] = serializeAws_json1_1MetricStatisticList(
      input.statistics,
      context
    );
  }
  if (input.unit !== undefined) {
    bodyParams["unit"] = input.unit;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseParametersRequest = (
  input: GetRelationalDatabaseParametersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseRequest = (
  input: GetRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseSnapshotRequest = (
  input: GetRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.relationalDatabaseSnapshotName !== undefined) {
    bodyParams["relationalDatabaseSnapshotName"] =
      input.relationalDatabaseSnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest = (
  input: GetRelationalDatabaseSnapshotsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRelationalDatabasesRequest = (
  input: GetRelationalDatabasesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetStaticIpRequest = (
  input: GetStaticIpRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.staticIpName !== undefined) {
    bodyParams["staticIpName"] = input.staticIpName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetStaticIpsRequest = (
  input: GetStaticIpsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.pageToken !== undefined) {
    bodyParams["pageToken"] = input.pageToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ImportKeyPairRequest = (
  input: ImportKeyPairRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.keyPairName !== undefined) {
    bodyParams["keyPairName"] = input.keyPairName;
  }
  if (input.publicKeyBase64 !== undefined) {
    bodyParams["publicKeyBase64"] = input.publicKeyBase64;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceEntry = (
  input: InstanceEntry,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.availabilityZone !== undefined) {
    bodyParams["availabilityZone"] = input.availabilityZone;
  }
  if (input.instanceType !== undefined) {
    bodyParams["instanceType"] = input.instanceType;
  }
  if (input.portInfoSource !== undefined) {
    bodyParams["portInfoSource"] = input.portInfoSource;
  }
  if (input.sourceName !== undefined) {
    bodyParams["sourceName"] = input.sourceName;
  }
  if (input.userData !== undefined) {
    bodyParams["userData"] = input.userData;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceEntryList = (
  input: Array<InstanceEntry>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1InstanceEntry(entry, context)
  );
};

const serializeAws_json1_1IsVpcPeeredRequest = (
  input: IsVpcPeeredRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1MetricStatisticList = (
  input: Array<MetricStatistic | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1OpenInstancePublicPortsRequest = (
  input: OpenInstancePublicPortsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  if (input.portInfo !== undefined) {
    bodyParams["portInfo"] = serializeAws_json1_1PortInfo(
      input.portInfo,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PeerVpcRequest = (
  input: PeerVpcRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1PortInfo = (
  input: PortInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.fromPort !== undefined) {
    bodyParams["fromPort"] = input.fromPort;
  }
  if (input.protocol !== undefined) {
    bodyParams["protocol"] = input.protocol;
  }
  if (input.toPort !== undefined) {
    bodyParams["toPort"] = input.toPort;
  }
  return bodyParams;
};

const serializeAws_json1_1PortInfoList = (
  input: Array<PortInfo>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1PortInfo(entry, context)
  );
};

const serializeAws_json1_1PutInstancePublicPortsRequest = (
  input: PutInstancePublicPortsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  if (input.portInfos !== undefined) {
    bodyParams["portInfos"] = serializeAws_json1_1PortInfoList(
      input.portInfos,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RebootInstanceRequest = (
  input: RebootInstanceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1RebootRelationalDatabaseRequest = (
  input: RebootRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  return bodyParams;
};

const serializeAws_json1_1RelationalDatabaseParameter = (
  input: RelationalDatabaseParameter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.allowedValues !== undefined) {
    bodyParams["allowedValues"] = input.allowedValues;
  }
  if (input.applyMethod !== undefined) {
    bodyParams["applyMethod"] = input.applyMethod;
  }
  if (input.applyType !== undefined) {
    bodyParams["applyType"] = input.applyType;
  }
  if (input.dataType !== undefined) {
    bodyParams["dataType"] = input.dataType;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.isModifiable !== undefined) {
    bodyParams["isModifiable"] = input.isModifiable;
  }
  if (input.parameterName !== undefined) {
    bodyParams["parameterName"] = input.parameterName;
  }
  if (input.parameterValue !== undefined) {
    bodyParams["parameterValue"] = input.parameterValue;
  }
  return bodyParams;
};

const serializeAws_json1_1RelationalDatabaseParameterList = (
  input: Array<RelationalDatabaseParameter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1RelationalDatabaseParameter(entry, context)
  );
};

const serializeAws_json1_1ReleaseStaticIpRequest = (
  input: ReleaseStaticIpRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.staticIpName !== undefined) {
    bodyParams["staticIpName"] = input.staticIpName;
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1StartInstanceRequest = (
  input: StartInstanceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1StartRelationalDatabaseRequest = (
  input: StartRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  return bodyParams;
};

const serializeAws_json1_1StopInstanceRequest = (
  input: StopInstanceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.force !== undefined) {
    bodyParams["force"] = input.force;
  }
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1StopRelationalDatabaseRequest = (
  input: StopRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  if (input.relationalDatabaseSnapshotName !== undefined) {
    bodyParams["relationalDatabaseSnapshotName"] =
      input.relationalDatabaseSnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.resourceName !== undefined) {
    bodyParams["resourceName"] = input.resourceName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UnpeerVpcRequest = (
  input: UnpeerVpcRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.resourceName !== undefined) {
    bodyParams["resourceName"] = input.resourceName;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(
      input.tagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDomainEntryRequest = (
  input: UpdateDomainEntryRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domainEntry !== undefined) {
    bodyParams["domainEntry"] = serializeAws_json1_1DomainEntry(
      input.domainEntry,
      context
    );
  }
  if (input.domainName !== undefined) {
    bodyParams["domainName"] = input.domainName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateLoadBalancerAttributeRequest = (
  input: UpdateLoadBalancerAttributeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.attributeName !== undefined) {
    bodyParams["attributeName"] = input.attributeName;
  }
  if (input.attributeValue !== undefined) {
    bodyParams["attributeValue"] = input.attributeValue;
  }
  if (input.loadBalancerName !== undefined) {
    bodyParams["loadBalancerName"] = input.loadBalancerName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateRelationalDatabaseParametersRequest = (
  input: UpdateRelationalDatabaseParametersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.parameters !== undefined) {
    bodyParams[
      "parameters"
    ] = serializeAws_json1_1RelationalDatabaseParameterList(
      input.parameters,
      context
    );
  }
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateRelationalDatabaseRequest = (
  input: UpdateRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.applyImmediately !== undefined) {
    bodyParams["applyImmediately"] = input.applyImmediately;
  }
  if (input.disableBackupRetention !== undefined) {
    bodyParams["disableBackupRetention"] = input.disableBackupRetention;
  }
  if (input.enableBackupRetention !== undefined) {
    bodyParams["enableBackupRetention"] = input.enableBackupRetention;
  }
  if (input.masterUserPassword !== undefined) {
    bodyParams["masterUserPassword"] = input.masterUserPassword;
  }
  if (input.preferredBackupWindow !== undefined) {
    bodyParams["preferredBackupWindow"] = input.preferredBackupWindow;
  }
  if (input.preferredMaintenanceWindow !== undefined) {
    bodyParams["preferredMaintenanceWindow"] = input.preferredMaintenanceWindow;
  }
  if (input.publiclyAccessible !== undefined) {
    bodyParams["publiclyAccessible"] = input.publiclyAccessible;
  }
  if (input.relationalDatabaseName !== undefined) {
    bodyParams["relationalDatabaseName"] = input.relationalDatabaseName;
  }
  if (input.rotateMasterUserPassword !== undefined) {
    bodyParams["rotateMasterUserPassword"] = input.rotateMasterUserPassword;
  }
  return bodyParams;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    code: undefined,
    docs: undefined,
    message: undefined,
    tip: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.docs !== undefined) {
    contents.docs = output.docs;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.tip !== undefined) {
    contents.tip = output.tip;
  }
  return contents;
};

const deserializeAws_json1_1AccountSetupInProgressException = (
  output: any,
  context: __SerdeContext
): AccountSetupInProgressException => {
  let contents: any = {
    __type: "AccountSetupInProgressException",
    code: undefined,
    docs: undefined,
    message: undefined,
    tip: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.docs !== undefined) {
    contents.docs = output.docs;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.tip !== undefined) {
    contents.tip = output.tip;
  }
  return contents;
};

const deserializeAws_json1_1AddOn = (
  output: any,
  context: __SerdeContext
): AddOn => {
  let contents: any = {
    __type: "AddOn",
    name: undefined,
    nextSnapshotTimeOfDay: undefined,
    snapshotTimeOfDay: undefined,
    status: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.nextSnapshotTimeOfDay !== undefined) {
    contents.nextSnapshotTimeOfDay = output.nextSnapshotTimeOfDay;
  }
  if (output.snapshotTimeOfDay !== undefined) {
    contents.snapshotTimeOfDay = output.snapshotTimeOfDay;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1AddOnList = (
  output: any,
  context: __SerdeContext
): Array<AddOn> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AddOn(entry, context)
  );
};

const deserializeAws_json1_1AllocateStaticIpResult = (
  output: any,
  context: __SerdeContext
): AllocateStaticIpResult => {
  let contents: any = {
    __type: "AllocateStaticIpResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AttachDiskResult = (
  output: any,
  context: __SerdeContext
): AttachDiskResult => {
  let contents: any = {
    __type: "AttachDiskResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AttachInstancesToLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): AttachInstancesToLoadBalancerResult => {
  let contents: any = {
    __type: "AttachInstancesToLoadBalancerResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerTlsCertificateResult => {
  let contents: any = {
    __type: "AttachLoadBalancerTlsCertificateResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AttachStaticIpResult = (
  output: any,
  context: __SerdeContext
): AttachStaticIpResult => {
  let contents: any = {
    __type: "AttachStaticIpResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AttachedDisk = (
  output: any,
  context: __SerdeContext
): AttachedDisk => {
  let contents: any = {
    __type: "AttachedDisk",
    path: undefined,
    sizeInGb: undefined
  };
  if (output.path !== undefined) {
    contents.path = output.path;
  }
  if (output.sizeInGb !== undefined) {
    contents.sizeInGb = output.sizeInGb;
  }
  return contents;
};

const deserializeAws_json1_1AttachedDiskList = (
  output: any,
  context: __SerdeContext
): Array<AttachedDisk> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AttachedDisk(entry, context)
  );
};

const deserializeAws_json1_1AutoSnapshotDetails = (
  output: any,
  context: __SerdeContext
): AutoSnapshotDetails => {
  let contents: any = {
    __type: "AutoSnapshotDetails",
    createdAt: undefined,
    date: undefined,
    fromAttachedDisks: undefined,
    status: undefined
  };
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.date !== undefined) {
    contents.date = output.date;
  }
  if (output.fromAttachedDisks !== undefined) {
    contents.fromAttachedDisks = deserializeAws_json1_1AttachedDiskList(
      output.fromAttachedDisks,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1AutoSnapshotDetailsList = (
  output: any,
  context: __SerdeContext
): Array<AutoSnapshotDetails> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AutoSnapshotDetails(entry, context)
  );
};

const deserializeAws_json1_1AvailabilityZone = (
  output: any,
  context: __SerdeContext
): AvailabilityZone => {
  let contents: any = {
    __type: "AvailabilityZone",
    state: undefined,
    zoneName: undefined
  };
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  if (output.zoneName !== undefined) {
    contents.zoneName = output.zoneName;
  }
  return contents;
};

const deserializeAws_json1_1AvailabilityZoneList = (
  output: any,
  context: __SerdeContext
): Array<AvailabilityZone> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AvailabilityZone(entry, context)
  );
};

const deserializeAws_json1_1Blueprint = (
  output: any,
  context: __SerdeContext
): Blueprint => {
  let contents: any = {
    __type: "Blueprint",
    blueprintId: undefined,
    description: undefined,
    group: undefined,
    isActive: undefined,
    licenseUrl: undefined,
    minPower: undefined,
    name: undefined,
    platform: undefined,
    productUrl: undefined,
    type: undefined,
    version: undefined,
    versionCode: undefined
  };
  if (output.blueprintId !== undefined) {
    contents.blueprintId = output.blueprintId;
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.group !== undefined) {
    contents.group = output.group;
  }
  if (output.isActive !== undefined) {
    contents.isActive = output.isActive;
  }
  if (output.licenseUrl !== undefined) {
    contents.licenseUrl = output.licenseUrl;
  }
  if (output.minPower !== undefined) {
    contents.minPower = output.minPower;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.platform !== undefined) {
    contents.platform = output.platform;
  }
  if (output.productUrl !== undefined) {
    contents.productUrl = output.productUrl;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  if (output.version !== undefined) {
    contents.version = output.version;
  }
  if (output.versionCode !== undefined) {
    contents.versionCode = output.versionCode;
  }
  return contents;
};

const deserializeAws_json1_1BlueprintList = (
  output: any,
  context: __SerdeContext
): Array<Blueprint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Blueprint(entry, context)
  );
};

const deserializeAws_json1_1Bundle = (
  output: any,
  context: __SerdeContext
): Bundle => {
  let contents: any = {
    __type: "Bundle",
    bundleId: undefined,
    cpuCount: undefined,
    diskSizeInGb: undefined,
    instanceType: undefined,
    isActive: undefined,
    name: undefined,
    power: undefined,
    price: undefined,
    ramSizeInGb: undefined,
    supportedPlatforms: undefined,
    transferPerMonthInGb: undefined
  };
  if (output.bundleId !== undefined) {
    contents.bundleId = output.bundleId;
  }
  if (output.cpuCount !== undefined) {
    contents.cpuCount = output.cpuCount;
  }
  if (output.diskSizeInGb !== undefined) {
    contents.diskSizeInGb = output.diskSizeInGb;
  }
  if (output.instanceType !== undefined) {
    contents.instanceType = output.instanceType;
  }
  if (output.isActive !== undefined) {
    contents.isActive = output.isActive;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.power !== undefined) {
    contents.power = output.power;
  }
  if (output.price !== undefined) {
    contents.price = output.price;
  }
  if (output.ramSizeInGb !== undefined) {
    contents.ramSizeInGb = output.ramSizeInGb;
  }
  if (output.supportedPlatforms !== undefined) {
    contents.supportedPlatforms = deserializeAws_json1_1InstancePlatformList(
      output.supportedPlatforms,
      context
    );
  }
  if (output.transferPerMonthInGb !== undefined) {
    contents.transferPerMonthInGb = output.transferPerMonthInGb;
  }
  return contents;
};

const deserializeAws_json1_1BundleList = (
  output: any,
  context: __SerdeContext
): Array<Bundle> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Bundle(entry, context)
  );
};

const deserializeAws_json1_1CloseInstancePublicPortsResult = (
  output: any,
  context: __SerdeContext
): CloseInstancePublicPortsResult => {
  let contents: any = {
    __type: "CloseInstancePublicPortsResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CloudFormationStackRecord = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecord => {
  let contents: any = {
    __type: "CloudFormationStackRecord",
    arn: undefined,
    createdAt: undefined,
    destinationInfo: undefined,
    location: undefined,
    name: undefined,
    resourceType: undefined,
    sourceInfo: undefined,
    state: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.destinationInfo !== undefined) {
    contents.destinationInfo = deserializeAws_json1_1DestinationInfo(
      output.destinationInfo,
      context
    );
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.sourceInfo !== undefined) {
    contents.sourceInfo = deserializeAws_json1_1CloudFormationStackRecordSourceInfoList(
      output.sourceInfo,
      context
    );
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  return contents;
};

const deserializeAws_json1_1CloudFormationStackRecordList = (
  output: any,
  context: __SerdeContext
): Array<CloudFormationStackRecord> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CloudFormationStackRecord(entry, context)
  );
};

const deserializeAws_json1_1CloudFormationStackRecordSourceInfo = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecordSourceInfo => {
  let contents: any = {
    __type: "CloudFormationStackRecordSourceInfo",
    arn: undefined,
    name: undefined,
    resourceType: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_1CloudFormationStackRecordSourceInfoList = (
  output: any,
  context: __SerdeContext
): Array<CloudFormationStackRecordSourceInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CloudFormationStackRecordSourceInfo(entry, context)
  );
};

const deserializeAws_json1_1CopySnapshotResult = (
  output: any,
  context: __SerdeContext
): CopySnapshotResult => {
  let contents: any = {
    __type: "CopySnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateCloudFormationStackResult = (
  output: any,
  context: __SerdeContext
): CreateCloudFormationStackResult => {
  let contents: any = {
    __type: "CreateCloudFormationStackResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateDiskFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateDiskFromSnapshotResult => {
  let contents: any = {
    __type: "CreateDiskFromSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateDiskResult = (
  output: any,
  context: __SerdeContext
): CreateDiskResult => {
  let contents: any = {
    __type: "CreateDiskResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateDiskSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateDiskSnapshotResult => {
  let contents: any = {
    __type: "CreateDiskSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateDomainEntryResult = (
  output: any,
  context: __SerdeContext
): CreateDomainEntryResult => {
  let contents: any = {
    __type: "CreateDomainEntryResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateDomainResult = (
  output: any,
  context: __SerdeContext
): CreateDomainResult => {
  let contents: any = {
    __type: "CreateDomainResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateInstanceSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateInstanceSnapshotResult => {
  let contents: any = {
    __type: "CreateInstanceSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateInstancesFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateInstancesFromSnapshotResult => {
  let contents: any = {
    __type: "CreateInstancesFromSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateInstancesResult = (
  output: any,
  context: __SerdeContext
): CreateInstancesResult => {
  let contents: any = {
    __type: "CreateInstancesResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateKeyPairResult = (
  output: any,
  context: __SerdeContext
): CreateKeyPairResult => {
  let contents: any = {
    __type: "CreateKeyPairResult",
    keyPair: undefined,
    operation: undefined,
    privateKeyBase64: undefined,
    publicKeyBase64: undefined
  };
  if (output.keyPair !== undefined) {
    contents.keyPair = deserializeAws_json1_1KeyPair(output.keyPair, context);
  }
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  if (output.privateKeyBase64 !== undefined) {
    contents.privateKeyBase64 = output.privateKeyBase64;
  }
  if (output.publicKeyBase64 !== undefined) {
    contents.publicKeyBase64 = output.publicKeyBase64;
  }
  return contents;
};

const deserializeAws_json1_1CreateLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerResult => {
  let contents: any = {
    __type: "CreateLoadBalancerResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerTlsCertificateResult => {
  let contents: any = {
    __type: "CreateLoadBalancerTlsCertificateResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseFromSnapshotResult => {
  let contents: any = {
    __type: "CreateRelationalDatabaseFromSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseResult => {
  let contents: any = {
    __type: "CreateRelationalDatabaseResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseSnapshotResult => {
  let contents: any = {
    __type: "CreateRelationalDatabaseSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteAutoSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteAutoSnapshotResult => {
  let contents: any = {
    __type: "DeleteAutoSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteDiskResult = (
  output: any,
  context: __SerdeContext
): DeleteDiskResult => {
  let contents: any = {
    __type: "DeleteDiskResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteDiskSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteDiskSnapshotResult => {
  let contents: any = {
    __type: "DeleteDiskSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteDomainEntryResult = (
  output: any,
  context: __SerdeContext
): DeleteDomainEntryResult => {
  let contents: any = {
    __type: "DeleteDomainEntryResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteDomainResult = (
  output: any,
  context: __SerdeContext
): DeleteDomainResult => {
  let contents: any = {
    __type: "DeleteDomainResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteInstanceResult = (
  output: any,
  context: __SerdeContext
): DeleteInstanceResult => {
  let contents: any = {
    __type: "DeleteInstanceResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteInstanceSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteInstanceSnapshotResult => {
  let contents: any = {
    __type: "DeleteInstanceSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteKeyPairResult = (
  output: any,
  context: __SerdeContext
): DeleteKeyPairResult => {
  let contents: any = {
    __type: "DeleteKeyPairResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteKnownHostKeysResult = (
  output: any,
  context: __SerdeContext
): DeleteKnownHostKeysResult => {
  let contents: any = {
    __type: "DeleteKnownHostKeysResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerResult => {
  let contents: any = {
    __type: "DeleteLoadBalancerResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerTlsCertificateResult => {
  let contents: any = {
    __type: "DeleteLoadBalancerTlsCertificateResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): DeleteRelationalDatabaseResult => {
  let contents: any = {
    __type: "DeleteRelationalDatabaseResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteRelationalDatabaseSnapshotResult => {
  let contents: any = {
    __type: "DeleteRelationalDatabaseSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DestinationInfo = (
  output: any,
  context: __SerdeContext
): DestinationInfo => {
  let contents: any = {
    __type: "DestinationInfo",
    id: undefined,
    service: undefined
  };
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.service !== undefined) {
    contents.service = output.service;
  }
  return contents;
};

const deserializeAws_json1_1DetachDiskResult = (
  output: any,
  context: __SerdeContext
): DetachDiskResult => {
  let contents: any = {
    __type: "DetachDiskResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DetachInstancesFromLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): DetachInstancesFromLoadBalancerResult => {
  let contents: any = {
    __type: "DetachInstancesFromLoadBalancerResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DetachStaticIpResult = (
  output: any,
  context: __SerdeContext
): DetachStaticIpResult => {
  let contents: any = {
    __type: "DetachStaticIpResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DisableAddOnResult = (
  output: any,
  context: __SerdeContext
): DisableAddOnResult => {
  let contents: any = {
    __type: "DisableAddOnResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Disk = (
  output: any,
  context: __SerdeContext
): Disk => {
  let contents: any = {
    __type: "Disk",
    addOns: undefined,
    arn: undefined,
    attachedTo: undefined,
    attachmentState: undefined,
    createdAt: undefined,
    gbInUse: undefined,
    iops: undefined,
    isAttached: undefined,
    isSystemDisk: undefined,
    location: undefined,
    name: undefined,
    path: undefined,
    resourceType: undefined,
    sizeInGb: undefined,
    state: undefined,
    supportCode: undefined,
    tags: undefined
  };
  if (output.addOns !== undefined) {
    contents.addOns = deserializeAws_json1_1AddOnList(output.addOns, context);
  }
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.attachedTo !== undefined) {
    contents.attachedTo = output.attachedTo;
  }
  if (output.attachmentState !== undefined) {
    contents.attachmentState = output.attachmentState;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.gbInUse !== undefined) {
    contents.gbInUse = output.gbInUse;
  }
  if (output.iops !== undefined) {
    contents.iops = output.iops;
  }
  if (output.isAttached !== undefined) {
    contents.isAttached = output.isAttached;
  }
  if (output.isSystemDisk !== undefined) {
    contents.isSystemDisk = output.isSystemDisk;
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.path !== undefined) {
    contents.path = output.path;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.sizeInGb !== undefined) {
    contents.sizeInGb = output.sizeInGb;
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1DiskInfo = (
  output: any,
  context: __SerdeContext
): DiskInfo => {
  let contents: any = {
    __type: "DiskInfo",
    isSystemDisk: undefined,
    name: undefined,
    path: undefined,
    sizeInGb: undefined
  };
  if (output.isSystemDisk !== undefined) {
    contents.isSystemDisk = output.isSystemDisk;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.path !== undefined) {
    contents.path = output.path;
  }
  if (output.sizeInGb !== undefined) {
    contents.sizeInGb = output.sizeInGb;
  }
  return contents;
};

const deserializeAws_json1_1DiskInfoList = (
  output: any,
  context: __SerdeContext
): Array<DiskInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DiskInfo(entry, context)
  );
};

const deserializeAws_json1_1DiskList = (
  output: any,
  context: __SerdeContext
): Array<Disk> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Disk(entry, context)
  );
};

const deserializeAws_json1_1DiskSnapshot = (
  output: any,
  context: __SerdeContext
): DiskSnapshot => {
  let contents: any = {
    __type: "DiskSnapshot",
    arn: undefined,
    createdAt: undefined,
    fromDiskArn: undefined,
    fromDiskName: undefined,
    fromInstanceArn: undefined,
    fromInstanceName: undefined,
    isFromAutoSnapshot: undefined,
    location: undefined,
    name: undefined,
    progress: undefined,
    resourceType: undefined,
    sizeInGb: undefined,
    state: undefined,
    supportCode: undefined,
    tags: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.fromDiskArn !== undefined) {
    contents.fromDiskArn = output.fromDiskArn;
  }
  if (output.fromDiskName !== undefined) {
    contents.fromDiskName = output.fromDiskName;
  }
  if (output.fromInstanceArn !== undefined) {
    contents.fromInstanceArn = output.fromInstanceArn;
  }
  if (output.fromInstanceName !== undefined) {
    contents.fromInstanceName = output.fromInstanceName;
  }
  if (output.isFromAutoSnapshot !== undefined) {
    contents.isFromAutoSnapshot = output.isFromAutoSnapshot;
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.progress !== undefined) {
    contents.progress = output.progress;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.sizeInGb !== undefined) {
    contents.sizeInGb = output.sizeInGb;
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1DiskSnapshotInfo = (
  output: any,
  context: __SerdeContext
): DiskSnapshotInfo => {
  let contents: any = {
    __type: "DiskSnapshotInfo",
    sizeInGb: undefined
  };
  if (output.sizeInGb !== undefined) {
    contents.sizeInGb = output.sizeInGb;
  }
  return contents;
};

const deserializeAws_json1_1DiskSnapshotList = (
  output: any,
  context: __SerdeContext
): Array<DiskSnapshot> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DiskSnapshot(entry, context)
  );
};

const deserializeAws_json1_1Domain = (
  output: any,
  context: __SerdeContext
): Domain => {
  let contents: any = {
    __type: "Domain",
    arn: undefined,
    createdAt: undefined,
    domainEntries: undefined,
    location: undefined,
    name: undefined,
    resourceType: undefined,
    supportCode: undefined,
    tags: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.domainEntries !== undefined) {
    contents.domainEntries = deserializeAws_json1_1DomainEntryList(
      output.domainEntries,
      context
    );
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1DomainEntry = (
  output: any,
  context: __SerdeContext
): DomainEntry => {
  let contents: any = {
    __type: "DomainEntry",
    id: undefined,
    isAlias: undefined,
    name: undefined,
    options: undefined,
    target: undefined,
    type: undefined
  };
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.isAlias !== undefined) {
    contents.isAlias = output.isAlias;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.options !== undefined) {
    contents.options = deserializeAws_json1_1DomainEntryOptions(
      output.options,
      context
    );
  }
  if (output.target !== undefined) {
    contents.target = output.target;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1DomainEntryList = (
  output: any,
  context: __SerdeContext
): Array<DomainEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DomainEntry(entry, context)
  );
};

const deserializeAws_json1_1DomainEntryOptions = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1DomainList = (
  output: any,
  context: __SerdeContext
): Array<Domain> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Domain(entry, context)
  );
};

const deserializeAws_json1_1DownloadDefaultKeyPairResult = (
  output: any,
  context: __SerdeContext
): DownloadDefaultKeyPairResult => {
  let contents: any = {
    __type: "DownloadDefaultKeyPairResult",
    privateKeyBase64: undefined,
    publicKeyBase64: undefined
  };
  if (output.privateKeyBase64 !== undefined) {
    contents.privateKeyBase64 = output.privateKeyBase64;
  }
  if (output.publicKeyBase64 !== undefined) {
    contents.publicKeyBase64 = output.publicKeyBase64;
  }
  return contents;
};

const deserializeAws_json1_1EnableAddOnResult = (
  output: any,
  context: __SerdeContext
): EnableAddOnResult => {
  let contents: any = {
    __type: "EnableAddOnResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ExportSnapshotRecord = (
  output: any,
  context: __SerdeContext
): ExportSnapshotRecord => {
  let contents: any = {
    __type: "ExportSnapshotRecord",
    arn: undefined,
    createdAt: undefined,
    destinationInfo: undefined,
    location: undefined,
    name: undefined,
    resourceType: undefined,
    sourceInfo: undefined,
    state: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.destinationInfo !== undefined) {
    contents.destinationInfo = deserializeAws_json1_1DestinationInfo(
      output.destinationInfo,
      context
    );
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.sourceInfo !== undefined) {
    contents.sourceInfo = deserializeAws_json1_1ExportSnapshotRecordSourceInfo(
      output.sourceInfo,
      context
    );
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  return contents;
};

const deserializeAws_json1_1ExportSnapshotRecordList = (
  output: any,
  context: __SerdeContext
): Array<ExportSnapshotRecord> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExportSnapshotRecord(entry, context)
  );
};

const deserializeAws_json1_1ExportSnapshotRecordSourceInfo = (
  output: any,
  context: __SerdeContext
): ExportSnapshotRecordSourceInfo => {
  let contents: any = {
    __type: "ExportSnapshotRecordSourceInfo",
    arn: undefined,
    createdAt: undefined,
    diskSnapshotInfo: undefined,
    fromResourceArn: undefined,
    fromResourceName: undefined,
    instanceSnapshotInfo: undefined,
    name: undefined,
    resourceType: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.diskSnapshotInfo !== undefined) {
    contents.diskSnapshotInfo = deserializeAws_json1_1DiskSnapshotInfo(
      output.diskSnapshotInfo,
      context
    );
  }
  if (output.fromResourceArn !== undefined) {
    contents.fromResourceArn = output.fromResourceArn;
  }
  if (output.fromResourceName !== undefined) {
    contents.fromResourceName = output.fromResourceName;
  }
  if (output.instanceSnapshotInfo !== undefined) {
    contents.instanceSnapshotInfo = deserializeAws_json1_1InstanceSnapshotInfo(
      output.instanceSnapshotInfo,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_1ExportSnapshotResult = (
  output: any,
  context: __SerdeContext
): ExportSnapshotResult => {
  let contents: any = {
    __type: "ExportSnapshotResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetActiveNamesResult = (
  output: any,
  context: __SerdeContext
): GetActiveNamesResult => {
  let contents: any = {
    __type: "GetActiveNamesResult",
    activeNames: undefined,
    nextPageToken: undefined
  };
  if (output.activeNames !== undefined) {
    contents.activeNames = deserializeAws_json1_1StringList(
      output.activeNames,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetAutoSnapshotsResult = (
  output: any,
  context: __SerdeContext
): GetAutoSnapshotsResult => {
  let contents: any = {
    __type: "GetAutoSnapshotsResult",
    autoSnapshots: undefined,
    resourceName: undefined,
    resourceType: undefined
  };
  if (output.autoSnapshots !== undefined) {
    contents.autoSnapshots = deserializeAws_json1_1AutoSnapshotDetailsList(
      output.autoSnapshots,
      context
    );
  }
  if (output.resourceName !== undefined) {
    contents.resourceName = output.resourceName;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_1GetBlueprintsResult = (
  output: any,
  context: __SerdeContext
): GetBlueprintsResult => {
  let contents: any = {
    __type: "GetBlueprintsResult",
    blueprints: undefined,
    nextPageToken: undefined
  };
  if (output.blueprints !== undefined) {
    contents.blueprints = deserializeAws_json1_1BlueprintList(
      output.blueprints,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetBundlesResult = (
  output: any,
  context: __SerdeContext
): GetBundlesResult => {
  let contents: any = {
    __type: "GetBundlesResult",
    bundles: undefined,
    nextPageToken: undefined
  };
  if (output.bundles !== undefined) {
    contents.bundles = deserializeAws_json1_1BundleList(
      output.bundles,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetCloudFormationStackRecordsResult = (
  output: any,
  context: __SerdeContext
): GetCloudFormationStackRecordsResult => {
  let contents: any = {
    __type: "GetCloudFormationStackRecordsResult",
    cloudFormationStackRecords: undefined,
    nextPageToken: undefined
  };
  if (output.cloudFormationStackRecords !== undefined) {
    contents.cloudFormationStackRecords = deserializeAws_json1_1CloudFormationStackRecordList(
      output.cloudFormationStackRecords,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetDiskResult = (
  output: any,
  context: __SerdeContext
): GetDiskResult => {
  let contents: any = {
    __type: "GetDiskResult",
    disk: undefined
  };
  if (output.disk !== undefined) {
    contents.disk = deserializeAws_json1_1Disk(output.disk, context);
  }
  return contents;
};

const deserializeAws_json1_1GetDiskSnapshotResult = (
  output: any,
  context: __SerdeContext
): GetDiskSnapshotResult => {
  let contents: any = {
    __type: "GetDiskSnapshotResult",
    diskSnapshot: undefined
  };
  if (output.diskSnapshot !== undefined) {
    contents.diskSnapshot = deserializeAws_json1_1DiskSnapshot(
      output.diskSnapshot,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDiskSnapshotsResult = (
  output: any,
  context: __SerdeContext
): GetDiskSnapshotsResult => {
  let contents: any = {
    __type: "GetDiskSnapshotsResult",
    diskSnapshots: undefined,
    nextPageToken: undefined
  };
  if (output.diskSnapshots !== undefined) {
    contents.diskSnapshots = deserializeAws_json1_1DiskSnapshotList(
      output.diskSnapshots,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetDisksResult = (
  output: any,
  context: __SerdeContext
): GetDisksResult => {
  let contents: any = {
    __type: "GetDisksResult",
    disks: undefined,
    nextPageToken: undefined
  };
  if (output.disks !== undefined) {
    contents.disks = deserializeAws_json1_1DiskList(output.disks, context);
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetDomainResult = (
  output: any,
  context: __SerdeContext
): GetDomainResult => {
  let contents: any = {
    __type: "GetDomainResult",
    domain: undefined
  };
  if (output.domain !== undefined) {
    contents.domain = deserializeAws_json1_1Domain(output.domain, context);
  }
  return contents;
};

const deserializeAws_json1_1GetDomainsResult = (
  output: any,
  context: __SerdeContext
): GetDomainsResult => {
  let contents: any = {
    __type: "GetDomainsResult",
    domains: undefined,
    nextPageToken: undefined
  };
  if (output.domains !== undefined) {
    contents.domains = deserializeAws_json1_1DomainList(
      output.domains,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetExportSnapshotRecordsResult = (
  output: any,
  context: __SerdeContext
): GetExportSnapshotRecordsResult => {
  let contents: any = {
    __type: "GetExportSnapshotRecordsResult",
    exportSnapshotRecords: undefined,
    nextPageToken: undefined
  };
  if (output.exportSnapshotRecords !== undefined) {
    contents.exportSnapshotRecords = deserializeAws_json1_1ExportSnapshotRecordList(
      output.exportSnapshotRecords,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetInstanceAccessDetailsResult = (
  output: any,
  context: __SerdeContext
): GetInstanceAccessDetailsResult => {
  let contents: any = {
    __type: "GetInstanceAccessDetailsResult",
    accessDetails: undefined
  };
  if (output.accessDetails !== undefined) {
    contents.accessDetails = deserializeAws_json1_1InstanceAccessDetails(
      output.accessDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetInstanceMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetInstanceMetricDataResult => {
  let contents: any = {
    __type: "GetInstanceMetricDataResult",
    metricData: undefined,
    metricName: undefined
  };
  if (output.metricData !== undefined) {
    contents.metricData = deserializeAws_json1_1MetricDatapointList(
      output.metricData,
      context
    );
  }
  if (output.metricName !== undefined) {
    contents.metricName = output.metricName;
  }
  return contents;
};

const deserializeAws_json1_1GetInstancePortStatesResult = (
  output: any,
  context: __SerdeContext
): GetInstancePortStatesResult => {
  let contents: any = {
    __type: "GetInstancePortStatesResult",
    portStates: undefined
  };
  if (output.portStates !== undefined) {
    contents.portStates = deserializeAws_json1_1InstancePortStateList(
      output.portStates,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetInstanceResult = (
  output: any,
  context: __SerdeContext
): GetInstanceResult => {
  let contents: any = {
    __type: "GetInstanceResult",
    instance: undefined
  };
  if (output.instance !== undefined) {
    contents.instance = deserializeAws_json1_1Instance(
      output.instance,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetInstanceSnapshotResult = (
  output: any,
  context: __SerdeContext
): GetInstanceSnapshotResult => {
  let contents: any = {
    __type: "GetInstanceSnapshotResult",
    instanceSnapshot: undefined
  };
  if (output.instanceSnapshot !== undefined) {
    contents.instanceSnapshot = deserializeAws_json1_1InstanceSnapshot(
      output.instanceSnapshot,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetInstanceSnapshotsResult = (
  output: any,
  context: __SerdeContext
): GetInstanceSnapshotsResult => {
  let contents: any = {
    __type: "GetInstanceSnapshotsResult",
    instanceSnapshots: undefined,
    nextPageToken: undefined
  };
  if (output.instanceSnapshots !== undefined) {
    contents.instanceSnapshots = deserializeAws_json1_1InstanceSnapshotList(
      output.instanceSnapshots,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetInstanceStateResult = (
  output: any,
  context: __SerdeContext
): GetInstanceStateResult => {
  let contents: any = {
    __type: "GetInstanceStateResult",
    state: undefined
  };
  if (output.state !== undefined) {
    contents.state = deserializeAws_json1_1InstanceState(output.state, context);
  }
  return contents;
};

const deserializeAws_json1_1GetInstancesResult = (
  output: any,
  context: __SerdeContext
): GetInstancesResult => {
  let contents: any = {
    __type: "GetInstancesResult",
    instances: undefined,
    nextPageToken: undefined
  };
  if (output.instances !== undefined) {
    contents.instances = deserializeAws_json1_1InstanceList(
      output.instances,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetKeyPairResult = (
  output: any,
  context: __SerdeContext
): GetKeyPairResult => {
  let contents: any = {
    __type: "GetKeyPairResult",
    keyPair: undefined
  };
  if (output.keyPair !== undefined) {
    contents.keyPair = deserializeAws_json1_1KeyPair(output.keyPair, context);
  }
  return contents;
};

const deserializeAws_json1_1GetKeyPairsResult = (
  output: any,
  context: __SerdeContext
): GetKeyPairsResult => {
  let contents: any = {
    __type: "GetKeyPairsResult",
    keyPairs: undefined,
    nextPageToken: undefined
  };
  if (output.keyPairs !== undefined) {
    contents.keyPairs = deserializeAws_json1_1KeyPairList(
      output.keyPairs,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetLoadBalancerMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerMetricDataResult => {
  let contents: any = {
    __type: "GetLoadBalancerMetricDataResult",
    metricData: undefined,
    metricName: undefined
  };
  if (output.metricData !== undefined) {
    contents.metricData = deserializeAws_json1_1MetricDatapointList(
      output.metricData,
      context
    );
  }
  if (output.metricName !== undefined) {
    contents.metricName = output.metricName;
  }
  return contents;
};

const deserializeAws_json1_1GetLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerResult => {
  let contents: any = {
    __type: "GetLoadBalancerResult",
    loadBalancer: undefined
  };
  if (output.loadBalancer !== undefined) {
    contents.loadBalancer = deserializeAws_json1_1LoadBalancer(
      output.loadBalancer,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerTlsCertificatesResult => {
  let contents: any = {
    __type: "GetLoadBalancerTlsCertificatesResult",
    tlsCertificates: undefined
  };
  if (output.tlsCertificates !== undefined) {
    contents.tlsCertificates = deserializeAws_json1_1LoadBalancerTlsCertificateList(
      output.tlsCertificates,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetLoadBalancersResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancersResult => {
  let contents: any = {
    __type: "GetLoadBalancersResult",
    loadBalancers: undefined,
    nextPageToken: undefined
  };
  if (output.loadBalancers !== undefined) {
    contents.loadBalancers = deserializeAws_json1_1LoadBalancerList(
      output.loadBalancers,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetOperationResult = (
  output: any,
  context: __SerdeContext
): GetOperationResult => {
  let contents: any = {
    __type: "GetOperationResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetOperationsForResourceResult = (
  output: any,
  context: __SerdeContext
): GetOperationsForResourceResult => {
  let contents: any = {
    __type: "GetOperationsForResourceResult",
    nextPageCount: undefined,
    nextPageToken: undefined,
    operations: undefined
  };
  if (output.nextPageCount !== undefined) {
    contents.nextPageCount = output.nextPageCount;
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetOperationsResult = (
  output: any,
  context: __SerdeContext
): GetOperationsResult => {
  let contents: any = {
    __type: "GetOperationsResult",
    nextPageToken: undefined,
    operations: undefined
  };
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRegionsResult = (
  output: any,
  context: __SerdeContext
): GetRegionsResult => {
  let contents: any = {
    __type: "GetRegionsResult",
    regions: undefined
  };
  if (output.regions !== undefined) {
    contents.regions = deserializeAws_json1_1RegionList(
      output.regions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseBlueprintsResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseBlueprintsResult",
    blueprints: undefined,
    nextPageToken: undefined
  };
  if (output.blueprints !== undefined) {
    contents.blueprints = deserializeAws_json1_1RelationalDatabaseBlueprintList(
      output.blueprints,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseBundlesResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseBundlesResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseBundlesResult",
    bundles: undefined,
    nextPageToken: undefined
  };
  if (output.bundles !== undefined) {
    contents.bundles = deserializeAws_json1_1RelationalDatabaseBundleList(
      output.bundles,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseEventsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseEventsResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseEventsResult",
    nextPageToken: undefined,
    relationalDatabaseEvents: undefined
  };
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.relationalDatabaseEvents !== undefined) {
    contents.relationalDatabaseEvents = deserializeAws_json1_1RelationalDatabaseEventList(
      output.relationalDatabaseEvents,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseLogEventsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseLogEventsResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseLogEventsResult",
    nextBackwardToken: undefined,
    nextForwardToken: undefined,
    resourceLogEvents: undefined
  };
  if (output.nextBackwardToken !== undefined) {
    contents.nextBackwardToken = output.nextBackwardToken;
  }
  if (output.nextForwardToken !== undefined) {
    contents.nextForwardToken = output.nextForwardToken;
  }
  if (output.resourceLogEvents !== undefined) {
    contents.resourceLogEvents = deserializeAws_json1_1LogEventList(
      output.resourceLogEvents,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseLogStreamsResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseLogStreamsResult",
    logStreams: undefined
  };
  if (output.logStreams !== undefined) {
    contents.logStreams = deserializeAws_json1_1StringList(
      output.logStreams,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseMasterUserPasswordResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseMasterUserPasswordResult",
    createdAt: undefined,
    masterUserPassword: undefined
  };
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.masterUserPassword !== undefined) {
    contents.masterUserPassword = output.masterUserPassword;
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseMetricDataResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseMetricDataResult",
    metricData: undefined,
    metricName: undefined
  };
  if (output.metricData !== undefined) {
    contents.metricData = deserializeAws_json1_1MetricDatapointList(
      output.metricData,
      context
    );
  }
  if (output.metricName !== undefined) {
    contents.metricName = output.metricName;
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseParametersResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseParametersResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseParametersResult",
    nextPageToken: undefined,
    parameters: undefined
  };
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.parameters !== undefined) {
    contents.parameters = deserializeAws_json1_1RelationalDatabaseParameterList(
      output.parameters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseResult",
    relationalDatabase: undefined
  };
  if (output.relationalDatabase !== undefined) {
    contents.relationalDatabase = deserializeAws_json1_1RelationalDatabase(
      output.relationalDatabase,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseSnapshotResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseSnapshotResult",
    relationalDatabaseSnapshot: undefined
  };
  if (output.relationalDatabaseSnapshot !== undefined) {
    contents.relationalDatabaseSnapshot = deserializeAws_json1_1RelationalDatabaseSnapshot(
      output.relationalDatabaseSnapshot,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseSnapshotsResult => {
  let contents: any = {
    __type: "GetRelationalDatabaseSnapshotsResult",
    nextPageToken: undefined,
    relationalDatabaseSnapshots: undefined
  };
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.relationalDatabaseSnapshots !== undefined) {
    contents.relationalDatabaseSnapshots = deserializeAws_json1_1RelationalDatabaseSnapshotList(
      output.relationalDatabaseSnapshots,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRelationalDatabasesResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabasesResult => {
  let contents: any = {
    __type: "GetRelationalDatabasesResult",
    nextPageToken: undefined,
    relationalDatabases: undefined
  };
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.relationalDatabases !== undefined) {
    contents.relationalDatabases = deserializeAws_json1_1RelationalDatabaseList(
      output.relationalDatabases,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetStaticIpResult = (
  output: any,
  context: __SerdeContext
): GetStaticIpResult => {
  let contents: any = {
    __type: "GetStaticIpResult",
    staticIp: undefined
  };
  if (output.staticIp !== undefined) {
    contents.staticIp = deserializeAws_json1_1StaticIp(
      output.staticIp,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetStaticIpsResult = (
  output: any,
  context: __SerdeContext
): GetStaticIpsResult => {
  let contents: any = {
    __type: "GetStaticIpsResult",
    nextPageToken: undefined,
    staticIps: undefined
  };
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.staticIps !== undefined) {
    contents.staticIps = deserializeAws_json1_1StaticIpList(
      output.staticIps,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1HostKeyAttributes = (
  output: any,
  context: __SerdeContext
): HostKeyAttributes => {
  let contents: any = {
    __type: "HostKeyAttributes",
    algorithm: undefined,
    fingerprintSHA1: undefined,
    fingerprintSHA256: undefined,
    notValidAfter: undefined,
    notValidBefore: undefined,
    publicKey: undefined,
    witnessedAt: undefined
  };
  if (output.algorithm !== undefined) {
    contents.algorithm = output.algorithm;
  }
  if (output.fingerprintSHA1 !== undefined) {
    contents.fingerprintSHA1 = output.fingerprintSHA1;
  }
  if (output.fingerprintSHA256 !== undefined) {
    contents.fingerprintSHA256 = output.fingerprintSHA256;
  }
  if (output.notValidAfter !== undefined) {
    contents.notValidAfter = new Date(
      output.notValidAfter % 1 != 0
        ? Math.round(output.notValidAfter * 1000)
        : output.notValidAfter
    );
  }
  if (output.notValidBefore !== undefined) {
    contents.notValidBefore = new Date(
      output.notValidBefore % 1 != 0
        ? Math.round(output.notValidBefore * 1000)
        : output.notValidBefore
    );
  }
  if (output.publicKey !== undefined) {
    contents.publicKey = output.publicKey;
  }
  if (output.witnessedAt !== undefined) {
    contents.witnessedAt = new Date(
      output.witnessedAt % 1 != 0
        ? Math.round(output.witnessedAt * 1000)
        : output.witnessedAt
    );
  }
  return contents;
};

const deserializeAws_json1_1HostKeysList = (
  output: any,
  context: __SerdeContext
): Array<HostKeyAttributes> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HostKeyAttributes(entry, context)
  );
};

const deserializeAws_json1_1ImportKeyPairResult = (
  output: any,
  context: __SerdeContext
): ImportKeyPairResult => {
  let contents: any = {
    __type: "ImportKeyPairResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Instance = (
  output: any,
  context: __SerdeContext
): Instance => {
  let contents: any = {
    __type: "Instance",
    addOns: undefined,
    arn: undefined,
    blueprintId: undefined,
    blueprintName: undefined,
    bundleId: undefined,
    createdAt: undefined,
    hardware: undefined,
    ipv6Address: undefined,
    isStaticIp: undefined,
    location: undefined,
    name: undefined,
    networking: undefined,
    privateIpAddress: undefined,
    publicIpAddress: undefined,
    resourceType: undefined,
    sshKeyName: undefined,
    state: undefined,
    supportCode: undefined,
    tags: undefined,
    username: undefined
  };
  if (output.addOns !== undefined) {
    contents.addOns = deserializeAws_json1_1AddOnList(output.addOns, context);
  }
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.blueprintId !== undefined) {
    contents.blueprintId = output.blueprintId;
  }
  if (output.blueprintName !== undefined) {
    contents.blueprintName = output.blueprintName;
  }
  if (output.bundleId !== undefined) {
    contents.bundleId = output.bundleId;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.hardware !== undefined) {
    contents.hardware = deserializeAws_json1_1InstanceHardware(
      output.hardware,
      context
    );
  }
  if (output.ipv6Address !== undefined) {
    contents.ipv6Address = output.ipv6Address;
  }
  if (output.isStaticIp !== undefined) {
    contents.isStaticIp = output.isStaticIp;
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.networking !== undefined) {
    contents.networking = deserializeAws_json1_1InstanceNetworking(
      output.networking,
      context
    );
  }
  if (output.privateIpAddress !== undefined) {
    contents.privateIpAddress = output.privateIpAddress;
  }
  if (output.publicIpAddress !== undefined) {
    contents.publicIpAddress = output.publicIpAddress;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.sshKeyName !== undefined) {
    contents.sshKeyName = output.sshKeyName;
  }
  if (output.state !== undefined) {
    contents.state = deserializeAws_json1_1InstanceState(output.state, context);
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  if (output.username !== undefined) {
    contents.username = output.username;
  }
  return contents;
};

const deserializeAws_json1_1InstanceAccessDetails = (
  output: any,
  context: __SerdeContext
): InstanceAccessDetails => {
  let contents: any = {
    __type: "InstanceAccessDetails",
    certKey: undefined,
    expiresAt: undefined,
    hostKeys: undefined,
    instanceName: undefined,
    ipAddress: undefined,
    password: undefined,
    passwordData: undefined,
    privateKey: undefined,
    protocol: undefined,
    username: undefined
  };
  if (output.certKey !== undefined) {
    contents.certKey = output.certKey;
  }
  if (output.expiresAt !== undefined) {
    contents.expiresAt = new Date(
      output.expiresAt % 1 != 0
        ? Math.round(output.expiresAt * 1000)
        : output.expiresAt
    );
  }
  if (output.hostKeys !== undefined) {
    contents.hostKeys = deserializeAws_json1_1HostKeysList(
      output.hostKeys,
      context
    );
  }
  if (output.instanceName !== undefined) {
    contents.instanceName = output.instanceName;
  }
  if (output.ipAddress !== undefined) {
    contents.ipAddress = output.ipAddress;
  }
  if (output.password !== undefined) {
    contents.password = output.password;
  }
  if (output.passwordData !== undefined) {
    contents.passwordData = deserializeAws_json1_1PasswordData(
      output.passwordData,
      context
    );
  }
  if (output.privateKey !== undefined) {
    contents.privateKey = output.privateKey;
  }
  if (output.protocol !== undefined) {
    contents.protocol = output.protocol;
  }
  if (output.username !== undefined) {
    contents.username = output.username;
  }
  return contents;
};

const deserializeAws_json1_1InstanceHardware = (
  output: any,
  context: __SerdeContext
): InstanceHardware => {
  let contents: any = {
    __type: "InstanceHardware",
    cpuCount: undefined,
    disks: undefined,
    ramSizeInGb: undefined
  };
  if (output.cpuCount !== undefined) {
    contents.cpuCount = output.cpuCount;
  }
  if (output.disks !== undefined) {
    contents.disks = deserializeAws_json1_1DiskList(output.disks, context);
  }
  if (output.ramSizeInGb !== undefined) {
    contents.ramSizeInGb = output.ramSizeInGb;
  }
  return contents;
};

const deserializeAws_json1_1InstanceHealthSummary = (
  output: any,
  context: __SerdeContext
): InstanceHealthSummary => {
  let contents: any = {
    __type: "InstanceHealthSummary",
    instanceHealth: undefined,
    instanceHealthReason: undefined,
    instanceName: undefined
  };
  if (output.instanceHealth !== undefined) {
    contents.instanceHealth = output.instanceHealth;
  }
  if (output.instanceHealthReason !== undefined) {
    contents.instanceHealthReason = output.instanceHealthReason;
  }
  if (output.instanceName !== undefined) {
    contents.instanceName = output.instanceName;
  }
  return contents;
};

const deserializeAws_json1_1InstanceHealthSummaryList = (
  output: any,
  context: __SerdeContext
): Array<InstanceHealthSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceHealthSummary(entry, context)
  );
};

const deserializeAws_json1_1InstanceList = (
  output: any,
  context: __SerdeContext
): Array<Instance> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Instance(entry, context)
  );
};

const deserializeAws_json1_1InstanceNetworking = (
  output: any,
  context: __SerdeContext
): InstanceNetworking => {
  let contents: any = {
    __type: "InstanceNetworking",
    monthlyTransfer: undefined,
    ports: undefined
  };
  if (output.monthlyTransfer !== undefined) {
    contents.monthlyTransfer = deserializeAws_json1_1MonthlyTransfer(
      output.monthlyTransfer,
      context
    );
  }
  if (output.ports !== undefined) {
    contents.ports = deserializeAws_json1_1InstancePortInfoList(
      output.ports,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InstancePlatformList = (
  output: any,
  context: __SerdeContext
): Array<InstancePlatform | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InstancePortInfo = (
  output: any,
  context: __SerdeContext
): InstancePortInfo => {
  let contents: any = {
    __type: "InstancePortInfo",
    accessDirection: undefined,
    accessFrom: undefined,
    accessType: undefined,
    commonName: undefined,
    fromPort: undefined,
    protocol: undefined,
    toPort: undefined
  };
  if (output.accessDirection !== undefined) {
    contents.accessDirection = output.accessDirection;
  }
  if (output.accessFrom !== undefined) {
    contents.accessFrom = output.accessFrom;
  }
  if (output.accessType !== undefined) {
    contents.accessType = output.accessType;
  }
  if (output.commonName !== undefined) {
    contents.commonName = output.commonName;
  }
  if (output.fromPort !== undefined) {
    contents.fromPort = output.fromPort;
  }
  if (output.protocol !== undefined) {
    contents.protocol = output.protocol;
  }
  if (output.toPort !== undefined) {
    contents.toPort = output.toPort;
  }
  return contents;
};

const deserializeAws_json1_1InstancePortInfoList = (
  output: any,
  context: __SerdeContext
): Array<InstancePortInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstancePortInfo(entry, context)
  );
};

const deserializeAws_json1_1InstancePortState = (
  output: any,
  context: __SerdeContext
): InstancePortState => {
  let contents: any = {
    __type: "InstancePortState",
    fromPort: undefined,
    protocol: undefined,
    state: undefined,
    toPort: undefined
  };
  if (output.fromPort !== undefined) {
    contents.fromPort = output.fromPort;
  }
  if (output.protocol !== undefined) {
    contents.protocol = output.protocol;
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  if (output.toPort !== undefined) {
    contents.toPort = output.toPort;
  }
  return contents;
};

const deserializeAws_json1_1InstancePortStateList = (
  output: any,
  context: __SerdeContext
): Array<InstancePortState> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstancePortState(entry, context)
  );
};

const deserializeAws_json1_1InstanceSnapshot = (
  output: any,
  context: __SerdeContext
): InstanceSnapshot => {
  let contents: any = {
    __type: "InstanceSnapshot",
    arn: undefined,
    createdAt: undefined,
    fromAttachedDisks: undefined,
    fromBlueprintId: undefined,
    fromBundleId: undefined,
    fromInstanceArn: undefined,
    fromInstanceName: undefined,
    isFromAutoSnapshot: undefined,
    location: undefined,
    name: undefined,
    progress: undefined,
    resourceType: undefined,
    sizeInGb: undefined,
    state: undefined,
    supportCode: undefined,
    tags: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.fromAttachedDisks !== undefined) {
    contents.fromAttachedDisks = deserializeAws_json1_1DiskList(
      output.fromAttachedDisks,
      context
    );
  }
  if (output.fromBlueprintId !== undefined) {
    contents.fromBlueprintId = output.fromBlueprintId;
  }
  if (output.fromBundleId !== undefined) {
    contents.fromBundleId = output.fromBundleId;
  }
  if (output.fromInstanceArn !== undefined) {
    contents.fromInstanceArn = output.fromInstanceArn;
  }
  if (output.fromInstanceName !== undefined) {
    contents.fromInstanceName = output.fromInstanceName;
  }
  if (output.isFromAutoSnapshot !== undefined) {
    contents.isFromAutoSnapshot = output.isFromAutoSnapshot;
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.progress !== undefined) {
    contents.progress = output.progress;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.sizeInGb !== undefined) {
    contents.sizeInGb = output.sizeInGb;
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1InstanceSnapshotInfo = (
  output: any,
  context: __SerdeContext
): InstanceSnapshotInfo => {
  let contents: any = {
    __type: "InstanceSnapshotInfo",
    fromBlueprintId: undefined,
    fromBundleId: undefined,
    fromDiskInfo: undefined
  };
  if (output.fromBlueprintId !== undefined) {
    contents.fromBlueprintId = output.fromBlueprintId;
  }
  if (output.fromBundleId !== undefined) {
    contents.fromBundleId = output.fromBundleId;
  }
  if (output.fromDiskInfo !== undefined) {
    contents.fromDiskInfo = deserializeAws_json1_1DiskInfoList(
      output.fromDiskInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InstanceSnapshotList = (
  output: any,
  context: __SerdeContext
): Array<InstanceSnapshot> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceSnapshot(entry, context)
  );
};

const deserializeAws_json1_1InstanceState = (
  output: any,
  context: __SerdeContext
): InstanceState => {
  let contents: any = {
    __type: "InstanceState",
    code: undefined,
    name: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    code: undefined,
    docs: undefined,
    message: undefined,
    tip: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.docs !== undefined) {
    contents.docs = output.docs;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.tip !== undefined) {
    contents.tip = output.tip;
  }
  return contents;
};

const deserializeAws_json1_1IsVpcPeeredResult = (
  output: any,
  context: __SerdeContext
): IsVpcPeeredResult => {
  let contents: any = {
    __type: "IsVpcPeeredResult",
    isPeered: undefined
  };
  if (output.isPeered !== undefined) {
    contents.isPeered = output.isPeered;
  }
  return contents;
};

const deserializeAws_json1_1KeyPair = (
  output: any,
  context: __SerdeContext
): KeyPair => {
  let contents: any = {
    __type: "KeyPair",
    arn: undefined,
    createdAt: undefined,
    fingerprint: undefined,
    location: undefined,
    name: undefined,
    resourceType: undefined,
    supportCode: undefined,
    tags: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.fingerprint !== undefined) {
    contents.fingerprint = output.fingerprint;
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1KeyPairList = (
  output: any,
  context: __SerdeContext
): Array<KeyPair> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyPair(entry, context)
  );
};

const deserializeAws_json1_1LoadBalancer = (
  output: any,
  context: __SerdeContext
): LoadBalancer => {
  let contents: any = {
    __type: "LoadBalancer",
    arn: undefined,
    configurationOptions: undefined,
    createdAt: undefined,
    dnsName: undefined,
    healthCheckPath: undefined,
    instanceHealthSummary: undefined,
    instancePort: undefined,
    location: undefined,
    name: undefined,
    protocol: undefined,
    publicPorts: undefined,
    resourceType: undefined,
    state: undefined,
    supportCode: undefined,
    tags: undefined,
    tlsCertificateSummaries: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.configurationOptions !== undefined) {
    contents.configurationOptions = deserializeAws_json1_1LoadBalancerConfigurationOptions(
      output.configurationOptions,
      context
    );
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.dnsName !== undefined) {
    contents.dnsName = output.dnsName;
  }
  if (output.healthCheckPath !== undefined) {
    contents.healthCheckPath = output.healthCheckPath;
  }
  if (output.instanceHealthSummary !== undefined) {
    contents.instanceHealthSummary = deserializeAws_json1_1InstanceHealthSummaryList(
      output.instanceHealthSummary,
      context
    );
  }
  if (output.instancePort !== undefined) {
    contents.instancePort = output.instancePort;
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.protocol !== undefined) {
    contents.protocol = output.protocol;
  }
  if (output.publicPorts !== undefined) {
    contents.publicPorts = deserializeAws_json1_1PortList(
      output.publicPorts,
      context
    );
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  if (output.tlsCertificateSummaries !== undefined) {
    contents.tlsCertificateSummaries = deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList(
      output.tlsCertificateSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1LoadBalancerConfigurationOptions = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1LoadBalancerList = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoadBalancer(entry, context)
  );
};

const deserializeAws_json1_1LoadBalancerTlsCertificate = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificate => {
  let contents: any = {
    __type: "LoadBalancerTlsCertificate",
    arn: undefined,
    createdAt: undefined,
    domainName: undefined,
    domainValidationRecords: undefined,
    failureReason: undefined,
    isAttached: undefined,
    issuedAt: undefined,
    issuer: undefined,
    keyAlgorithm: undefined,
    loadBalancerName: undefined,
    location: undefined,
    name: undefined,
    notAfter: undefined,
    notBefore: undefined,
    renewalSummary: undefined,
    resourceType: undefined,
    revocationReason: undefined,
    revokedAt: undefined,
    serial: undefined,
    signatureAlgorithm: undefined,
    status: undefined,
    subject: undefined,
    subjectAlternativeNames: undefined,
    supportCode: undefined,
    tags: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.domainName !== undefined) {
    contents.domainName = output.domainName;
  }
  if (output.domainValidationRecords !== undefined) {
    contents.domainValidationRecords = deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList(
      output.domainValidationRecords,
      context
    );
  }
  if (output.failureReason !== undefined) {
    contents.failureReason = output.failureReason;
  }
  if (output.isAttached !== undefined) {
    contents.isAttached = output.isAttached;
  }
  if (output.issuedAt !== undefined) {
    contents.issuedAt = new Date(
      output.issuedAt % 1 != 0
        ? Math.round(output.issuedAt * 1000)
        : output.issuedAt
    );
  }
  if (output.issuer !== undefined) {
    contents.issuer = output.issuer;
  }
  if (output.keyAlgorithm !== undefined) {
    contents.keyAlgorithm = output.keyAlgorithm;
  }
  if (output.loadBalancerName !== undefined) {
    contents.loadBalancerName = output.loadBalancerName;
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.notAfter !== undefined) {
    contents.notAfter = new Date(
      output.notAfter % 1 != 0
        ? Math.round(output.notAfter * 1000)
        : output.notAfter
    );
  }
  if (output.notBefore !== undefined) {
    contents.notBefore = new Date(
      output.notBefore % 1 != 0
        ? Math.round(output.notBefore * 1000)
        : output.notBefore
    );
  }
  if (output.renewalSummary !== undefined) {
    contents.renewalSummary = deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary(
      output.renewalSummary,
      context
    );
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.revocationReason !== undefined) {
    contents.revocationReason = output.revocationReason;
  }
  if (output.revokedAt !== undefined) {
    contents.revokedAt = new Date(
      output.revokedAt % 1 != 0
        ? Math.round(output.revokedAt * 1000)
        : output.revokedAt
    );
  }
  if (output.serial !== undefined) {
    contents.serial = output.serial;
  }
  if (output.signatureAlgorithm !== undefined) {
    contents.signatureAlgorithm = output.signatureAlgorithm;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.subject !== undefined) {
    contents.subject = output.subject;
  }
  if (output.subjectAlternativeNames !== undefined) {
    contents.subjectAlternativeNames = deserializeAws_json1_1StringList(
      output.subjectAlternativeNames,
      context
    );
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationOption => {
  let contents: any = {
    __type: "LoadBalancerTlsCertificateDomainValidationOption",
    domainName: undefined,
    validationStatus: undefined
  };
  if (output.domainName !== undefined) {
    contents.domainName = output.domainName;
  }
  if (output.validationStatus !== undefined) {
    contents.validationStatus = output.validationStatus;
  }
  return contents;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancerTlsCertificateDomainValidationOption> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption(
      entry,
      context
    )
  );
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationRecord => {
  let contents: any = {
    __type: "LoadBalancerTlsCertificateDomainValidationRecord",
    domainName: undefined,
    name: undefined,
    type: undefined,
    validationStatus: undefined,
    value: undefined
  };
  if (output.domainName !== undefined) {
    contents.domainName = output.domainName;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  if (output.validationStatus !== undefined) {
    contents.validationStatus = output.validationStatus;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancerTlsCertificateDomainValidationRecord> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord(
      entry,
      context
    )
  );
};

const deserializeAws_json1_1LoadBalancerTlsCertificateList = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancerTlsCertificate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoadBalancerTlsCertificate(entry, context)
  );
};

const deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateRenewalSummary => {
  let contents: any = {
    __type: "LoadBalancerTlsCertificateRenewalSummary",
    domainValidationOptions: undefined,
    renewalStatus: undefined
  };
  if (output.domainValidationOptions !== undefined) {
    contents.domainValidationOptions = deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList(
      output.domainValidationOptions,
      context
    );
  }
  if (output.renewalStatus !== undefined) {
    contents.renewalStatus = output.renewalStatus;
  }
  return contents;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateSummary = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateSummary => {
  let contents: any = {
    __type: "LoadBalancerTlsCertificateSummary",
    isAttached: undefined,
    name: undefined
  };
  if (output.isAttached !== undefined) {
    contents.isAttached = output.isAttached;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList = (
  output: any,
  context: __SerdeContext
): Array<LoadBalancerTlsCertificateSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LoadBalancerTlsCertificateSummary(entry, context)
  );
};

const deserializeAws_json1_1LogEvent = (
  output: any,
  context: __SerdeContext
): LogEvent => {
  let contents: any = {
    __type: "LogEvent",
    createdAt: undefined,
    message: undefined
  };
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LogEventList = (
  output: any,
  context: __SerdeContext
): Array<LogEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LogEvent(entry, context)
  );
};

const deserializeAws_json1_1MetricDatapoint = (
  output: any,
  context: __SerdeContext
): MetricDatapoint => {
  let contents: any = {
    __type: "MetricDatapoint",
    average: undefined,
    maximum: undefined,
    minimum: undefined,
    sampleCount: undefined,
    sum: undefined,
    timestamp: undefined,
    unit: undefined
  };
  if (output.average !== undefined) {
    contents.average = output.average;
  }
  if (output.maximum !== undefined) {
    contents.maximum = output.maximum;
  }
  if (output.minimum !== undefined) {
    contents.minimum = output.minimum;
  }
  if (output.sampleCount !== undefined) {
    contents.sampleCount = output.sampleCount;
  }
  if (output.sum !== undefined) {
    contents.sum = output.sum;
  }
  if (output.timestamp !== undefined) {
    contents.timestamp = new Date(
      output.timestamp % 1 != 0
        ? Math.round(output.timestamp * 1000)
        : output.timestamp
    );
  }
  if (output.unit !== undefined) {
    contents.unit = output.unit;
  }
  return contents;
};

const deserializeAws_json1_1MetricDatapointList = (
  output: any,
  context: __SerdeContext
): Array<MetricDatapoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricDatapoint(entry, context)
  );
};

const deserializeAws_json1_1MonthlyTransfer = (
  output: any,
  context: __SerdeContext
): MonthlyTransfer => {
  let contents: any = {
    __type: "MonthlyTransfer",
    gbPerMonthAllocated: undefined
  };
  if (output.gbPerMonthAllocated !== undefined) {
    contents.gbPerMonthAllocated = output.gbPerMonthAllocated;
  }
  return contents;
};

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  let contents: any = {
    __type: "NotFoundException",
    code: undefined,
    docs: undefined,
    message: undefined,
    tip: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.docs !== undefined) {
    contents.docs = output.docs;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.tip !== undefined) {
    contents.tip = output.tip;
  }
  return contents;
};

const deserializeAws_json1_1OpenInstancePublicPortsResult = (
  output: any,
  context: __SerdeContext
): OpenInstancePublicPortsResult => {
  let contents: any = {
    __type: "OpenInstancePublicPortsResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Operation = (
  output: any,
  context: __SerdeContext
): Operation => {
  let contents: any = {
    __type: "Operation",
    createdAt: undefined,
    errorCode: undefined,
    errorDetails: undefined,
    id: undefined,
    isTerminal: undefined,
    location: undefined,
    operationDetails: undefined,
    operationType: undefined,
    resourceName: undefined,
    resourceType: undefined,
    status: undefined,
    statusChangedAt: undefined
  };
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.errorCode !== undefined) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorDetails !== undefined) {
    contents.errorDetails = output.errorDetails;
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.isTerminal !== undefined) {
    contents.isTerminal = output.isTerminal;
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.operationDetails !== undefined) {
    contents.operationDetails = output.operationDetails;
  }
  if (output.operationType !== undefined) {
    contents.operationType = output.operationType;
  }
  if (output.resourceName !== undefined) {
    contents.resourceName = output.resourceName;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.statusChangedAt !== undefined) {
    contents.statusChangedAt = new Date(
      output.statusChangedAt % 1 != 0
        ? Math.round(output.statusChangedAt * 1000)
        : output.statusChangedAt
    );
  }
  return contents;
};

const deserializeAws_json1_1OperationFailureException = (
  output: any,
  context: __SerdeContext
): OperationFailureException => {
  let contents: any = {
    __type: "OperationFailureException",
    code: undefined,
    docs: undefined,
    message: undefined,
    tip: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.docs !== undefined) {
    contents.docs = output.docs;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.tip !== undefined) {
    contents.tip = output.tip;
  }
  return contents;
};

const deserializeAws_json1_1OperationList = (
  output: any,
  context: __SerdeContext
): Array<Operation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Operation(entry, context)
  );
};

const deserializeAws_json1_1PasswordData = (
  output: any,
  context: __SerdeContext
): PasswordData => {
  let contents: any = {
    __type: "PasswordData",
    ciphertext: undefined,
    keyPairName: undefined
  };
  if (output.ciphertext !== undefined) {
    contents.ciphertext = output.ciphertext;
  }
  if (output.keyPairName !== undefined) {
    contents.keyPairName = output.keyPairName;
  }
  return contents;
};

const deserializeAws_json1_1PeerVpcResult = (
  output: any,
  context: __SerdeContext
): PeerVpcResult => {
  let contents: any = {
    __type: "PeerVpcResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PendingMaintenanceAction = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction => {
  let contents: any = {
    __type: "PendingMaintenanceAction",
    action: undefined,
    currentApplyDate: undefined,
    description: undefined
  };
  if (output.action !== undefined) {
    contents.action = output.action;
  }
  if (output.currentApplyDate !== undefined) {
    contents.currentApplyDate = new Date(
      output.currentApplyDate % 1 != 0
        ? Math.round(output.currentApplyDate * 1000)
        : output.currentApplyDate
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  return contents;
};

const deserializeAws_json1_1PendingMaintenanceActionList = (
  output: any,
  context: __SerdeContext
): Array<PendingMaintenanceAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PendingMaintenanceAction(entry, context)
  );
};

const deserializeAws_json1_1PendingModifiedRelationalDatabaseValues = (
  output: any,
  context: __SerdeContext
): PendingModifiedRelationalDatabaseValues => {
  let contents: any = {
    __type: "PendingModifiedRelationalDatabaseValues",
    backupRetentionEnabled: undefined,
    engineVersion: undefined,
    masterUserPassword: undefined
  };
  if (output.backupRetentionEnabled !== undefined) {
    contents.backupRetentionEnabled = output.backupRetentionEnabled;
  }
  if (output.engineVersion !== undefined) {
    contents.engineVersion = output.engineVersion;
  }
  if (output.masterUserPassword !== undefined) {
    contents.masterUserPassword = output.masterUserPassword;
  }
  return contents;
};

const deserializeAws_json1_1PortList = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PutInstancePublicPortsResult = (
  output: any,
  context: __SerdeContext
): PutInstancePublicPortsResult => {
  let contents: any = {
    __type: "PutInstancePublicPortsResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RebootInstanceResult = (
  output: any,
  context: __SerdeContext
): RebootInstanceResult => {
  let contents: any = {
    __type: "RebootInstanceResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RebootRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): RebootRelationalDatabaseResult => {
  let contents: any = {
    __type: "RebootRelationalDatabaseResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Region = (
  output: any,
  context: __SerdeContext
): Region => {
  let contents: any = {
    __type: "Region",
    availabilityZones: undefined,
    continentCode: undefined,
    description: undefined,
    displayName: undefined,
    name: undefined,
    relationalDatabaseAvailabilityZones: undefined
  };
  if (output.availabilityZones !== undefined) {
    contents.availabilityZones = deserializeAws_json1_1AvailabilityZoneList(
      output.availabilityZones,
      context
    );
  }
  if (output.continentCode !== undefined) {
    contents.continentCode = output.continentCode;
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.displayName !== undefined) {
    contents.displayName = output.displayName;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.relationalDatabaseAvailabilityZones !== undefined) {
    contents.relationalDatabaseAvailabilityZones = deserializeAws_json1_1AvailabilityZoneList(
      output.relationalDatabaseAvailabilityZones,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RegionList = (
  output: any,
  context: __SerdeContext
): Array<Region> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Region(entry, context)
  );
};

const deserializeAws_json1_1RelationalDatabase = (
  output: any,
  context: __SerdeContext
): RelationalDatabase => {
  let contents: any = {
    __type: "RelationalDatabase",
    arn: undefined,
    backupRetentionEnabled: undefined,
    createdAt: undefined,
    engine: undefined,
    engineVersion: undefined,
    hardware: undefined,
    latestRestorableTime: undefined,
    location: undefined,
    masterDatabaseName: undefined,
    masterEndpoint: undefined,
    masterUsername: undefined,
    name: undefined,
    parameterApplyStatus: undefined,
    pendingMaintenanceActions: undefined,
    pendingModifiedValues: undefined,
    preferredBackupWindow: undefined,
    preferredMaintenanceWindow: undefined,
    publiclyAccessible: undefined,
    relationalDatabaseBlueprintId: undefined,
    relationalDatabaseBundleId: undefined,
    resourceType: undefined,
    secondaryAvailabilityZone: undefined,
    state: undefined,
    supportCode: undefined,
    tags: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.backupRetentionEnabled !== undefined) {
    contents.backupRetentionEnabled = output.backupRetentionEnabled;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.engine !== undefined) {
    contents.engine = output.engine;
  }
  if (output.engineVersion !== undefined) {
    contents.engineVersion = output.engineVersion;
  }
  if (output.hardware !== undefined) {
    contents.hardware = deserializeAws_json1_1RelationalDatabaseHardware(
      output.hardware,
      context
    );
  }
  if (output.latestRestorableTime !== undefined) {
    contents.latestRestorableTime = new Date(
      output.latestRestorableTime % 1 != 0
        ? Math.round(output.latestRestorableTime * 1000)
        : output.latestRestorableTime
    );
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.masterDatabaseName !== undefined) {
    contents.masterDatabaseName = output.masterDatabaseName;
  }
  if (output.masterEndpoint !== undefined) {
    contents.masterEndpoint = deserializeAws_json1_1RelationalDatabaseEndpoint(
      output.masterEndpoint,
      context
    );
  }
  if (output.masterUsername !== undefined) {
    contents.masterUsername = output.masterUsername;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.parameterApplyStatus !== undefined) {
    contents.parameterApplyStatus = output.parameterApplyStatus;
  }
  if (output.pendingMaintenanceActions !== undefined) {
    contents.pendingMaintenanceActions = deserializeAws_json1_1PendingMaintenanceActionList(
      output.pendingMaintenanceActions,
      context
    );
  }
  if (output.pendingModifiedValues !== undefined) {
    contents.pendingModifiedValues = deserializeAws_json1_1PendingModifiedRelationalDatabaseValues(
      output.pendingModifiedValues,
      context
    );
  }
  if (output.preferredBackupWindow !== undefined) {
    contents.preferredBackupWindow = output.preferredBackupWindow;
  }
  if (output.preferredMaintenanceWindow !== undefined) {
    contents.preferredMaintenanceWindow = output.preferredMaintenanceWindow;
  }
  if (output.publiclyAccessible !== undefined) {
    contents.publiclyAccessible = output.publiclyAccessible;
  }
  if (output.relationalDatabaseBlueprintId !== undefined) {
    contents.relationalDatabaseBlueprintId =
      output.relationalDatabaseBlueprintId;
  }
  if (output.relationalDatabaseBundleId !== undefined) {
    contents.relationalDatabaseBundleId = output.relationalDatabaseBundleId;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.secondaryAvailabilityZone !== undefined) {
    contents.secondaryAvailabilityZone = output.secondaryAvailabilityZone;
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1RelationalDatabaseBlueprint = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseBlueprint => {
  let contents: any = {
    __type: "RelationalDatabaseBlueprint",
    blueprintId: undefined,
    engine: undefined,
    engineDescription: undefined,
    engineVersion: undefined,
    engineVersionDescription: undefined,
    isEngineDefault: undefined
  };
  if (output.blueprintId !== undefined) {
    contents.blueprintId = output.blueprintId;
  }
  if (output.engine !== undefined) {
    contents.engine = output.engine;
  }
  if (output.engineDescription !== undefined) {
    contents.engineDescription = output.engineDescription;
  }
  if (output.engineVersion !== undefined) {
    contents.engineVersion = output.engineVersion;
  }
  if (output.engineVersionDescription !== undefined) {
    contents.engineVersionDescription = output.engineVersionDescription;
  }
  if (output.isEngineDefault !== undefined) {
    contents.isEngineDefault = output.isEngineDefault;
  }
  return contents;
};

const deserializeAws_json1_1RelationalDatabaseBlueprintList = (
  output: any,
  context: __SerdeContext
): Array<RelationalDatabaseBlueprint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RelationalDatabaseBlueprint(entry, context)
  );
};

const deserializeAws_json1_1RelationalDatabaseBundle = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseBundle => {
  let contents: any = {
    __type: "RelationalDatabaseBundle",
    bundleId: undefined,
    cpuCount: undefined,
    diskSizeInGb: undefined,
    isActive: undefined,
    isEncrypted: undefined,
    name: undefined,
    price: undefined,
    ramSizeInGb: undefined,
    transferPerMonthInGb: undefined
  };
  if (output.bundleId !== undefined) {
    contents.bundleId = output.bundleId;
  }
  if (output.cpuCount !== undefined) {
    contents.cpuCount = output.cpuCount;
  }
  if (output.diskSizeInGb !== undefined) {
    contents.diskSizeInGb = output.diskSizeInGb;
  }
  if (output.isActive !== undefined) {
    contents.isActive = output.isActive;
  }
  if (output.isEncrypted !== undefined) {
    contents.isEncrypted = output.isEncrypted;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.price !== undefined) {
    contents.price = output.price;
  }
  if (output.ramSizeInGb !== undefined) {
    contents.ramSizeInGb = output.ramSizeInGb;
  }
  if (output.transferPerMonthInGb !== undefined) {
    contents.transferPerMonthInGb = output.transferPerMonthInGb;
  }
  return contents;
};

const deserializeAws_json1_1RelationalDatabaseBundleList = (
  output: any,
  context: __SerdeContext
): Array<RelationalDatabaseBundle> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RelationalDatabaseBundle(entry, context)
  );
};

const deserializeAws_json1_1RelationalDatabaseEndpoint = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseEndpoint => {
  let contents: any = {
    __type: "RelationalDatabaseEndpoint",
    address: undefined,
    port: undefined
  };
  if (output.address !== undefined) {
    contents.address = output.address;
  }
  if (output.port !== undefined) {
    contents.port = output.port;
  }
  return contents;
};

const deserializeAws_json1_1RelationalDatabaseEvent = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseEvent => {
  let contents: any = {
    __type: "RelationalDatabaseEvent",
    createdAt: undefined,
    eventCategories: undefined,
    message: undefined,
    resource: undefined
  };
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.eventCategories !== undefined) {
    contents.eventCategories = deserializeAws_json1_1StringList(
      output.eventCategories,
      context
    );
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.resource !== undefined) {
    contents.resource = output.resource;
  }
  return contents;
};

const deserializeAws_json1_1RelationalDatabaseEventList = (
  output: any,
  context: __SerdeContext
): Array<RelationalDatabaseEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RelationalDatabaseEvent(entry, context)
  );
};

const deserializeAws_json1_1RelationalDatabaseHardware = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseHardware => {
  let contents: any = {
    __type: "RelationalDatabaseHardware",
    cpuCount: undefined,
    diskSizeInGb: undefined,
    ramSizeInGb: undefined
  };
  if (output.cpuCount !== undefined) {
    contents.cpuCount = output.cpuCount;
  }
  if (output.diskSizeInGb !== undefined) {
    contents.diskSizeInGb = output.diskSizeInGb;
  }
  if (output.ramSizeInGb !== undefined) {
    contents.ramSizeInGb = output.ramSizeInGb;
  }
  return contents;
};

const deserializeAws_json1_1RelationalDatabaseList = (
  output: any,
  context: __SerdeContext
): Array<RelationalDatabase> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RelationalDatabase(entry, context)
  );
};

const deserializeAws_json1_1RelationalDatabaseParameter = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseParameter => {
  let contents: any = {
    __type: "RelationalDatabaseParameter",
    allowedValues: undefined,
    applyMethod: undefined,
    applyType: undefined,
    dataType: undefined,
    description: undefined,
    isModifiable: undefined,
    parameterName: undefined,
    parameterValue: undefined
  };
  if (output.allowedValues !== undefined) {
    contents.allowedValues = output.allowedValues;
  }
  if (output.applyMethod !== undefined) {
    contents.applyMethod = output.applyMethod;
  }
  if (output.applyType !== undefined) {
    contents.applyType = output.applyType;
  }
  if (output.dataType !== undefined) {
    contents.dataType = output.dataType;
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.isModifiable !== undefined) {
    contents.isModifiable = output.isModifiable;
  }
  if (output.parameterName !== undefined) {
    contents.parameterName = output.parameterName;
  }
  if (output.parameterValue !== undefined) {
    contents.parameterValue = output.parameterValue;
  }
  return contents;
};

const deserializeAws_json1_1RelationalDatabaseParameterList = (
  output: any,
  context: __SerdeContext
): Array<RelationalDatabaseParameter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RelationalDatabaseParameter(entry, context)
  );
};

const deserializeAws_json1_1RelationalDatabaseSnapshot = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseSnapshot => {
  let contents: any = {
    __type: "RelationalDatabaseSnapshot",
    arn: undefined,
    createdAt: undefined,
    engine: undefined,
    engineVersion: undefined,
    fromRelationalDatabaseArn: undefined,
    fromRelationalDatabaseBlueprintId: undefined,
    fromRelationalDatabaseBundleId: undefined,
    fromRelationalDatabaseName: undefined,
    location: undefined,
    name: undefined,
    resourceType: undefined,
    sizeInGb: undefined,
    state: undefined,
    supportCode: undefined,
    tags: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.engine !== undefined) {
    contents.engine = output.engine;
  }
  if (output.engineVersion !== undefined) {
    contents.engineVersion = output.engineVersion;
  }
  if (output.fromRelationalDatabaseArn !== undefined) {
    contents.fromRelationalDatabaseArn = output.fromRelationalDatabaseArn;
  }
  if (output.fromRelationalDatabaseBlueprintId !== undefined) {
    contents.fromRelationalDatabaseBlueprintId =
      output.fromRelationalDatabaseBlueprintId;
  }
  if (output.fromRelationalDatabaseBundleId !== undefined) {
    contents.fromRelationalDatabaseBundleId =
      output.fromRelationalDatabaseBundleId;
  }
  if (output.fromRelationalDatabaseName !== undefined) {
    contents.fromRelationalDatabaseName = output.fromRelationalDatabaseName;
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.sizeInGb !== undefined) {
    contents.sizeInGb = output.sizeInGb;
  }
  if (output.state !== undefined) {
    contents.state = output.state;
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1RelationalDatabaseSnapshotList = (
  output: any,
  context: __SerdeContext
): Array<RelationalDatabaseSnapshot> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RelationalDatabaseSnapshot(entry, context)
  );
};

const deserializeAws_json1_1ReleaseStaticIpResult = (
  output: any,
  context: __SerdeContext
): ReleaseStaticIpResult => {
  let contents: any = {
    __type: "ReleaseStaticIpResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceLocation = (
  output: any,
  context: __SerdeContext
): ResourceLocation => {
  let contents: any = {
    __type: "ResourceLocation",
    availabilityZone: undefined,
    regionName: undefined
  };
  if (output.availabilityZone !== undefined) {
    contents.availabilityZone = output.availabilityZone;
  }
  if (output.regionName !== undefined) {
    contents.regionName = output.regionName;
  }
  return contents;
};

const deserializeAws_json1_1ServiceException = (
  output: any,
  context: __SerdeContext
): ServiceException => {
  let contents: any = {
    __type: "ServiceException",
    code: undefined,
    docs: undefined,
    message: undefined,
    tip: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.docs !== undefined) {
    contents.docs = output.docs;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.tip !== undefined) {
    contents.tip = output.tip;
  }
  return contents;
};

const deserializeAws_json1_1StartInstanceResult = (
  output: any,
  context: __SerdeContext
): StartInstanceResult => {
  let contents: any = {
    __type: "StartInstanceResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StartRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): StartRelationalDatabaseResult => {
  let contents: any = {
    __type: "StartRelationalDatabaseResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StaticIp = (
  output: any,
  context: __SerdeContext
): StaticIp => {
  let contents: any = {
    __type: "StaticIp",
    arn: undefined,
    attachedTo: undefined,
    createdAt: undefined,
    ipAddress: undefined,
    isAttached: undefined,
    location: undefined,
    name: undefined,
    resourceType: undefined,
    supportCode: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.attachedTo !== undefined) {
    contents.attachedTo = output.attachedTo;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.ipAddress !== undefined) {
    contents.ipAddress = output.ipAddress;
  }
  if (output.isAttached !== undefined) {
    contents.isAttached = output.isAttached;
  }
  if (output.location !== undefined) {
    contents.location = deserializeAws_json1_1ResourceLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.supportCode !== undefined) {
    contents.supportCode = output.supportCode;
  }
  return contents;
};

const deserializeAws_json1_1StaticIpList = (
  output: any,
  context: __SerdeContext
): Array<StaticIp> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StaticIp(entry, context)
  );
};

const deserializeAws_json1_1StopInstanceResult = (
  output: any,
  context: __SerdeContext
): StopInstanceResult => {
  let contents: any = {
    __type: "StopInstanceResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StopRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): StopRelationalDatabaseResult => {
  let contents: any = {
    __type: "StopRelationalDatabaseResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResult = (
  output: any,
  context: __SerdeContext
): TagResourceResult => {
  let contents: any = {
    __type: "TagResourceResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UnauthenticatedException = (
  output: any,
  context: __SerdeContext
): UnauthenticatedException => {
  let contents: any = {
    __type: "UnauthenticatedException",
    code: undefined,
    docs: undefined,
    message: undefined,
    tip: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.docs !== undefined) {
    contents.docs = output.docs;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.tip !== undefined) {
    contents.tip = output.tip;
  }
  return contents;
};

const deserializeAws_json1_1UnpeerVpcResult = (
  output: any,
  context: __SerdeContext
): UnpeerVpcResult => {
  let contents: any = {
    __type: "UnpeerVpcResult",
    operation: undefined
  };
  if (output.operation !== undefined) {
    contents.operation = deserializeAws_json1_1Operation(
      output.operation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceResult = (
  output: any,
  context: __SerdeContext
): UntagResourceResult => {
  let contents: any = {
    __type: "UntagResourceResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateDomainEntryResult = (
  output: any,
  context: __SerdeContext
): UpdateDomainEntryResult => {
  let contents: any = {
    __type: "UpdateDomainEntryResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateLoadBalancerAttributeResult = (
  output: any,
  context: __SerdeContext
): UpdateLoadBalancerAttributeResult => {
  let contents: any = {
    __type: "UpdateLoadBalancerAttributeResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateRelationalDatabaseParametersResult = (
  output: any,
  context: __SerdeContext
): UpdateRelationalDatabaseParametersResult => {
  let contents: any = {
    __type: "UpdateRelationalDatabaseParametersResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): UpdateRelationalDatabaseResult => {
  let contents: any = {
    __type: "UpdateRelationalDatabaseResult",
    operations: undefined
  };
  if (output.operations !== undefined) {
    contents.operations = deserializeAws_json1_1OperationList(
      output.operations,
      context
    );
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};