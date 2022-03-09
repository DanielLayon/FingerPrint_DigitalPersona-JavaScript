-------------------------------------------------------------------

                           DigitalPersona
                      U.are.U SDK for Windows

                           Version 3.2.0 
                          November 21, 2018
				
      (c) 1996-2018 DigitalPersona, Inc. All Rights Reserved. 
-------------------------------------------------------------------

This document provides late-breaking or other information that supplements the DigitalPersona U.are.U SDK for Windows documentation.


-------------------------
How to Use This Document
-------------------------

To view the Readme file on-screen in Windows Notepad, maximize the Notepad window. On the Format menu, click Word Wrap. To print the Readme file, open it in Notepad or another word processor, and then use the Print command on the File menu.


---------
CONTENTS
---------

1.   INSTALLATION
2.   COMPATIBILITY
3.   SYSTEM REQUIREMENTS
4.   RELEASE NOTES
5.   KNOWN ISSUES
6.   SUPPORT AND FEEDBACK

 
----------------
1. INSTALLATION
----------------

You must have local administrator rights to install this product on supported Windows systems. It is recommended to first unsinstall the previous version of the U.are.U SDK.

U.are.U SDK for Windows 3.2.0 
1- Open/load the U.are.U SDK for Windows product package
2- Run SDK\x86\setup.exe OR SDK\x64\setup.exe located in the SDK folder
3- Follow the installation instructions
4- Connect the supported Fingerprint Reader or Module

-----------------
2. COMPATIBILITY
-----------------

DigitalPersona U.are.U SDK for Windows v3.2.0 is compatible with the following DigitalPersona products:

- DigitalPersona v2.3 and v3.0

Fingerprint templates produced by the U.are.U SDK for Windows are also compatible with templates from the following DigitalPersona SDKs:

- Gold SDK
- Gold CE SDK
- One Touch for Windows SDK, all previous versions
- One Touch for Linux SDK, all distributions

Platinum SDK registration templates must be converted to a compatible format to work with U.are.U SDK for Windows v3.2.0 See the Developer Guide for instructions on performing this conversion. 

U.are.U SDK for Windows v3.2.0 is not compatible with any other DigitalPersona product.


-----------------------
3. SYSTEM REQUIREMENTS
-----------------------

- Microsoft Windows 7 (32/64-bit) or Microsoft Windows 8.1 (32/64-bit), Windows 10 (32/64-bit)
- JRE or JDK v 1.7 or 1.8 - To run samples and completed applications if developing in Java
- .NET Framework v4.5 or newer 
- USB port on the computer where the fingerprint reader is to be connected


-----------------
4. RELEASE NOTES
-----------------

4.1 This release adds support for optional Presentation Attack Detection for the U.are.U 5300 module and reader, when installed without Authentication Service. PAD algorithm is off by default.

4.2 This release supports the following APIs:

- C++
- .NET
- ActiveX  
- Java


------------------
5.   KNOWN ISSUES
------------------

5.1 On systems where both the DigitalPersona v2.3 or v3.0 client software and the U.are.U SDK are installed: Uninstallation of the U.are.U SDK for Windows (or accompanying Runtime) on a system may disable some features of the DigitalPersona software.  In these situations, DigitalPersona may need to be reinstalled or repaired. Uninstallation of the DigitalPersona client from the system may disable some features of the U.are.U SDK.  In these situations, the U.are.U SDK\RTE may need to be reinstalled or repaired.

5.2 Streaming is not supported in Remote Desktop or Citrix environments.

5.3 Upgrading from a prior version of the U.are.U SDK/RTE for Windows to a service-less install of U.are.U SDK/RTE for Windows v3.2.0 is not supported and an error message will be displayed.

5.4 On Windows 10, in order to access the U.are.U 4500 Reader from Java applications Oracle JRE or JDK v1.8.0_51 and earlier should be used. The U.are.U 4500 does not work with JRE and JDK 1.8.0_60 and later on Windows 10.

5.5 The path of jpos.properties needs to be set to run the JavaPos sample with RTE installation.

5.6 When using the WBF driver on Windows 7, readers should not be disconnected and reconnected. If they are, a reboot of the computer will be required in order to restore WBF reader functionality.

5.7 When using the WBF driver on Windows 8.1 and Windows 10, if the reader is disconnected, there could be a 10 to 15 second delay before a disconnect error is received by the client application.

5.8 When using the WBF driver on Windows 8.1 and Windows 10, if the computer is awakened from sleep or hibernation, there could be a disconnect error received by the client application. The application should close the reader and reopen it again.

5.9 WBF readers are supported only with the Authentication Service installed and active.

5.10 If after the installation of the U.are.U SDK the WBF driver for the Eikon or U.are.U 4500 reader gets replaced with the legacy driver: To restore the WBF driver, uninstall the legacy driver and reboot the computer.

5.11 If after the installation of DigitalPersona v2.3 or 3.0 together with the U.are.U SDK v3.2.0 and using the WBF reader, the SDK sample applications and SDK client applications cannot capture fingerprints and return an error: Set the value of the HKLM\Software\DigitalPersona\Policies\CredentialsRoaming to 1 and reboot the computer.

5.12 DigitalPersona v2.1 is not compatible with the U.are.U SDK 3.2.0. If DigitalPersona and the U.are.U SDK are to be used together, upgrade to DigitalPersona v2.3 or v3.0.

5.13 To use the OPOS wrapper and/or to compile the OPOS sample app, Visual Basic 6.0 is required.

5.14 tabclt32.ocx needs to be manually copied and registered to run the OPOS sample with RTE installation.

5.15 When using the Web API, only one instance of the browser can work with the fingerprint reader.


------------------------
6. SUPPORT AND FEEDBACK
------------------------

The latest version of documentation is available at http://www.crossmatch.com/Support/Reference-Material/
Free technical support is available through the Crossmatch Developer Web Portal at http://devportal.digitalpersona.com.
You can also purchase a Developer Support package at our web store: http://www.crossmatch.com


